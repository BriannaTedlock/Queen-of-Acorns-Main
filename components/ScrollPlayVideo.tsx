"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ScrollPlayVideoProps {
  src: string;
  containerClassName?: string;
  videoClassName?: string;
  resetOnView?: boolean;
  parallax?: boolean;
  driftPx?: number;
}

export default function ScrollPlayVideo({
  src,
  containerClassName,
  videoClassName,
  resetOnView = false,
  parallax = false,
  driftPx = 10,
}: ScrollPlayVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // audio is locked until user interacts (browser policy)
  const [canUnmute, setCanUnmute] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-hide the UI (speaker button) after first paint
  useEffect(() => {
    const hide = setTimeout(() => setShowUI(false), 2500);
    return () => clearTimeout(hide);
  }, []);
  const pokeUI = () => setShowUI(true);

  // One-time: unlock audio after first user gesture
  useEffect(() => {
    const unlock = () => setCanUnmute(true);
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  // NEW: best-effort auto-unmute when allowed by the browser
 useEffect(() => {
  const v = videoRef.current;
  if (!v) return;

  const tryPlay = async () => {
    // keep your policy: unmute only if allowed
    v.playsInline = true;
    v.muted = !canUnmute;
  
    // If Safari/iOS lost the buffer, reload source
    if (v.readyState < 2) v.load();

    try {
      await v.play();
    } catch {
      // fall back to muted autoplay if blocked
      v.muted = true;
      v.play().catch(() => {});
    }
  };

  const onPageShow = () => {
    // Resume only if the element should be visible
    if (isVisible) tryPlay();
  };

  const onVisibility = () => {
    if (document.visibilityState === "visible") {
      tryPlay();
    } else {
      v.pause();
      v.muted = true;
    }
  };

  window.addEventListener("pageshow", onPageShow);
  document.addEventListener("visibilitychange", onVisibility);

  const onLoadData = () => { if (isVisible) tryPlay(); };
  v.addEventListener("loadeddata", onLoadData);

  return () => {
    window.removeEventListener("pageshow", onPageShow);
    document.removeEventListener("visibilitychange", onVisibility);
    v.removeEventListener("loadeddata", onLoadData);
  };
}, [canUnmute, isVisible]);


  // Play/pause + fade on visibility
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Autoplay compliance
    video.muted = true;           // start muted so autoplay works
    video.playsInline = true;     // NEW: iOS inline playback

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (resetOnView) video.currentTime = 0;

            // allow sound only after user gesture (policy)
            video.muted = !canUnmute;

            // attempt play; if blocked, stay muted and retry
            video.play().catch(() => {
              video.muted = true;
              video.play().catch(() => {});
            });
          } else {
            setIsVisible(false);
            video.pause();
            video.muted = true;
          }
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(container);
    return () => io.disconnect();
  }, [canUnmute, resetOnView]);

  // Optional: Parallax drift
  useEffect(() => {
    if (!parallax) return;
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
        const offset = (progress - 0.5) * 2 * driftPx;

        el.style.transform = `translateY(${offset.toFixed(2)}px)`;
        el.style.willChange = "transform";
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      el.style.transform = "";
      el.style.willChange = "";
    };
  }, [parallax, driftPx]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    setCanUnmute(true);
    v.muted = !v.muted;
    if (v.paused) v.play().catch(() => {});
    pokeUI();
    setTimeout(() => setShowUI(false), 2500);
  };

  return (
    <div
      ref={containerRef}
      className={clsx("absolute inset-0", containerClassName)}
      onPointerMove={pokeUI}
      onMouseEnter={pokeUI}
      onTouchStart={pokeUI}
    >
      <video
        ref={videoRef}
    
        autoPlay
        loop
        preload="auto"
        playsInline
        muted>
        <source src={src} type="video/mp4" />
      </video>

      {/* Speaker button (tiny, auto-hides) */}
      <button
        type="button"
        aria-label="Toggle sound"
        onClick={toggleSound}
        className={clsx(
          "absolute bottom-3 right-3 rounded-full bg-black/55 backdrop-blur px-2.5 py-2 text-white",
          "hover:bg-black/70 transition-opacity",
          showUI ? "opacity-100" : "opacity-0"
        )}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10v4h3l4 3V7L6 10H3z" fill="currentColor" />
          <path d="M14.5 8.5a4 4 0 010 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16.5 6a7 7 0 010 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".8" />
        </svg>
      </button>
    </div>
  );
};