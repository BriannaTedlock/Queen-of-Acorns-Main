'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full bg-white py-3 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Mobile: stacked; sm+: grid with 3 columns so logo stays truly centered */}
        <div className="flex flex-col items-center gap-3 sm:grid sm:grid-cols-3 sm:items-center sm:gap-0" style={{ minHeight: 96 }}>
          
          {/* Left: Social icons (centered on mobile, left on sm+) */}
          <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
            <nav aria-label="Social links" className="flex items-center gap-3 sm:gap-4">
              <Link
                href="https://www.facebook.com/people/Queen-of-Acorns-Mobile-Bar/100082761544631/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/Images/icon-like-copy.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                  loading="lazy"
                />
              </Link>
              <Link
                href="https://www.instagram.com/queenofacornsmobilebar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/Images/icon-camera-copy.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                  loading="lazy"
                />
              </Link>
              <Link href="mailto:queenofacorns@yahoo.com" aria-label="Email">
                <Image
                  src="/Images/icon-email-copy.png"
                  alt="Email"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                  loading="lazy"
                />
              </Link>
              <Link href="tel:9133372474" aria-label="Phone">
                <Image
                  src="/Images/icon-phone-copy.png"
                  alt="Phone"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                  loading="lazy"
                />
              </Link>
            </nav>
          </div>

          {/* Center: Logo (always centered) */}
          <div className="order-1 sm:order-2 flex justify-center">
            <Link href="/" className="block" aria-label="Go to homepage">
              <Image
                src="/Images/logo-copy.png"
                alt="Queen of Acorns Logo"
                width={200}
                height={200}
                className="mx-auto cursor-pointer w-32 h-auto sm:w-40 lg:w-48"
                priority
                sizes="(max-width: 640px) 8rem, (max-width: 1024px) 10rem, 12rem"
              />
            </Link>
          </div>

          {/* Right: Spacer to keep true centering at sm+ (add CTA here later if you want) */}
          <div className="order-3 hidden sm:block" aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}
