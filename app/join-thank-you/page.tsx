'use client'

import { Header } from "@/components/Header"
import { Navbar } from "@/components/NavBar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function JoinThankYouPage() {
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
          />
          <h1 className="text-3xl font-bold text-[#5a7238] mb-2">Thank You for Applying!</h1>
          <p className="text-lg text-gray-700 mb-4">
            We’ve received your application and will review it soon.<br />
            If we think you’re a great fit, we’ll reach out to schedule an interview!
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
