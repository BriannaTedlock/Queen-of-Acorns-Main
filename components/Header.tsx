'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-6 space-y-4 px-4">
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="https://www.facebook.com/people/Queen-of-Acorns-Mobile-Bar/100082761544631/" target="_blank">
          <Image src="/Images/icon-like-copy.png" alt="Facebook" width={30} height={30} />
        </Link>
        <Link href="https://www.instagram.com/queenofacornsmobilebar/" target="_blank">
          <Image src="/Images/icon-camera-copy.png" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href="mailto:queenofacorns@yahoo.com">
          <Image src="/Images/icon-email-copy.png" alt="Email" width={30} height={30} />
        </Link>
        <Link href="tel:9133372474">
          <Image src="/Images/icon-phone-copy.png" alt="Phone" width={30} height={30} />
        </Link>
      </div>

      {/* Logo */}
      <Image
        src="/Images/logo-copy.png"
        alt="Queen of Acorns Logo"
        width={140}
        height={140}
        className="mx-auto"
      />
    </header>
  )
}
