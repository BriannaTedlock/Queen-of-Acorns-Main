'use client'

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-y border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto w-full px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center py-4 gap-x-4 gap-y-2 uppercase font-bold text-xs sm:text-sm tracking-wide">
            <NavigationMenuItem>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/packages" className={navigationMenuTriggerStyle()}>
                Packages
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/inquiry" className={navigationMenuTriggerStyle()}>
                Inquiry
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/join" className={navigationMenuTriggerStyle()}>
                Join Our Team
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu> 
      </div>
    </div>
  )
}
