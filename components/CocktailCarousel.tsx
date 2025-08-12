'use client';

import * as React from 'react';
import Image from 'next/image';

export type Cocktail = { name: string; image: string };

export default function CocktailCarousel({ cocktails }: { cocktails: Cocktail[] }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = cocktails.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  React.useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  if (!total) return null;

  return (
    <div className="w-full max-w-[380px] flex flex-col items-center">
      <div
        className="relative w-full rounded-3xl shadow-lg overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative w-full aspect-[3/4]">
          <Image
            key={cocktails[idx].image}
            src={cocktails[idx].image}
            alt={cocktails[idx].name}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 90vw, 380px"
            priority
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow p-2"
          aria-label="Previous cocktail"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow p-2"
          aria-label="Next cocktail"
        >
          &#8594;
        </button>
      </div>

      <div className="mt-3 text-lg font-semibold text-green-800 text-center px-2">
        {cocktails[idx].name}
      </div>
    </div>
  );
}
