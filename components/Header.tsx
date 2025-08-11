'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full bg-white py-4 px-4">
      <div className="relative flex items-center w-full" style={{ minHeight: 120 }}>
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4 absolute left-10 top-1/2 -translate-y-1/2">
          <Link href="https://www.facebook.com/people/Queen-of-Acorns-Mobile-Bar/100082761544631/" target="_blank" rel="noopener noreferrer">
            <Image src="/Images/icon-like-copy.png" alt="Facebook" width={50} height={50} />
          </Link>
          <Link href="https://www.instagram.com/queenofacornsmobilebar/" target="_blank" rel="noopener noreferrer">
            <Image src="/Images/icon-camera-copy.png" alt="Instagram" width={50} height={50} />
          </Link>
          <Link href="mailto:queenofacorns@yahoo.com">
            <Image src="/Images/icon-email-copy.png" alt="Email" width={50} height={50} />
          </Link>
          <Link href="tel:9133372474">
            <Image src="/Images/icon-phone-copy.png" alt="Phone" width={50} height={50} />
          </Link>
        </div>

        {/* Center: Logo as Home Link */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="block">
            <Image
              src="/Images/logo-copy.png"
              alt="Queen of Acorns Logo"
              width={180}
              height={180}
              className="mx-auto cursor-pointer"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
