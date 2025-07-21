'use client'

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Navbar } from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 bg-[#fffaf5]">
        <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full text-center p-8">
          <Image
            src="/Images/thank-you-frame.png"
            alt="Thank you"
            width={200}
            height={200}
            className="mx-auto mb-4 border-8 border-[#E08119] rounded-full"
            priority
          />
          <h1 className="text-4xl font-bold text-[#5a7238] mb-2">We will be in touch soon!</h1>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions, feel free to reach out anytime.<br/>
            <span className="block mt-2">
              <strong>Call or Text:</strong>{" "}
              <a href="tel:9133372474" className="text-[#a36d48] underline">(913) 337-2474</a>
            </span>
            <span className="block">
              <strong>Email:</strong>{" "}
              <a href="mailto:queenofacorns@yahoo.com" className="text-[#a36d48] underline">queenofacorns@yahoo.com</a>
            </span>
          </p>
          <Link href="/" className="inline-block mt-4">
            <button className="bg-[#5a7238] text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-[#4a5e2a] transition">Back to Home</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
