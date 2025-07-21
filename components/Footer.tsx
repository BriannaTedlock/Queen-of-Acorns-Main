import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-center py-10 px-4 sm:px-6">
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
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
      <div className="mb-4">
        <Image
          src="/Images/logo-copy.png"
          alt="Queen of Acorns Logo"
          width={100}
          height={100}
          className="mx-auto h-auto w-[80px] sm:w-[100px]"
        />
      </div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm text-gray-600">
        © 2025 Queen of Acorns Mobile Bar. All rights reserved.
      </p>
    </footer>
  );
}
