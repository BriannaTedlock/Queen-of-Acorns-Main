'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Navbar } from '@/components/NavBar'
import { Header } from '@/components/Header'

export default function PackagesPage() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-[#fffaf5] text-[#111]">

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a7238] mb-6">Packages Starting at Just $600!</h1>

          <div className="flex justify-center mb-8">
            <Link href="/contact">
              <button className="bg-[#5a7238] text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-[#4d5e2d] transition">Request a Quote</button>
            </Link>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="package1">
              <AccordionTrigger>Package 1 – Select 3: Hard Seltzers, Beer, Wine</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  <li><strong>Hard Seltzers</strong></li>
                  <li><strong>Beer:</strong> Craft, Domestic</li>
                  <li><strong>Wine:</strong> Red, White, Rosé, Bubbles</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="package2">
              <AccordionTrigger>Package 2 – Select 4: + Call Liquor</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  <li><strong>Hard Seltzers</strong></li>
                  <li><strong>Beer:</strong> Craft, Domestic</li>
                  <li><strong>Wine:</strong> Red, White, Rosé, Bubbles</li>
                  <li><strong>Calls:</strong> Vodka, Rum, Gin, Tequila, Whiskey/Bourbon, Scotch</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="package3">
              <AccordionTrigger>Package 3 – Select 4: + Premium Liquor</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  <li><strong>Hard Seltzers</strong></li>
                  <li><strong>Beer:</strong> Craft, Domestic</li>
                  <li><strong>Wine:</strong> Red, White, Rosé, Bubbles</li>
                  <li><strong>Premium:</strong> Vodka, Rum, Gin, Tequila, Whiskey/Bourbon, Scotch</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="package4">
              <AccordionTrigger>Package 4 – Custom Menu</AccordionTrigger>
              <AccordionContent>
                <p>Our team will work with you to create the perfect drink menu for your event. Pricing varies.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inclusions">
              <AccordionTrigger>Package Inclusions</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Official Vintage Camper Bar</li>
                  <li>Certified Bartenders</li>
                  <li>4 Hours of Service</li>
                  <li>Coolers with Ice</li>
                  <li>Plastic Cups, Paper Straws, Elegant Napkins</li>
                  <li>Bar Tools (Shakers, Strainers, etc.)</li>
                  <li>Refillable Water Station with Garnishes</li>
                  <li>Custom Menu Signage & Decor</li>
                  <li>Generator if Needed</li>
                  <li>Travel up to 100 miles</li>
                  <li>Setup and Breakdown</li>
                  <li>3 Non-Alcoholic Beverage Options</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="addons">
              <AccordionTrigger>Add-Ons</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Extra non-alcoholic beverages</li>
                  <li>Specialty mixers, energy drinks</li>
                  <li>Signature cocktails</li>
                  <li>Root Beer Floats, Affogato</li>
                  <li>Hot Chocolate Bar</li>
                  <li>Coffee & Tea Bar</li>
                  <li>Frozen drink machine</li>
                  <li>Custom napkins & cups</li>
                  <li>Champagne toast ($5/person)</li>
                  <li>Shot glass seating chart ($5/person)</li>
                  <li>Cocktail tables</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="text-center mt-12 text-2xl text-[#5a7238] font-bold">Email us for all other inquiries</h2>
          <p className="text-center text-sm mt-2">Weddings, Photoshoots, Corporate Events, Birthdays & More!</p>
          <div className="text-center mt-4">
            <a
              href="mailto:queenofacorns@yahoo.com"
              className="bg-[#5a7238] text-white px-6 py-3 rounded-full font-bold inline-block hover:bg-[#4d5e2d] transition"
            >
              queenofacorns@yahoo.com
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-4 mt-16 border-t border-gray-200 bg-white">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
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
          <Image src="/Images/logo-copy.png" alt="Queen of Acorns Logo" width={120} height={120} className="mx-auto" />
          <p className="mt-4 text-sm text-gray-500">© 2025 Queen of Acorns Mobile Bar. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
