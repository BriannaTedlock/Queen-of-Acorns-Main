'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, any> = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
     if (res.ok) {
    window.location.href = "/"   // <--- This redirects to the home page
    // Or use router.push("/") if you use next/navigation's useRouter
  } else {
    alert('Failed to send. Please try again.')
  }
  setLoading(false)
}

  return (
    <>
      <Header />
      <Navbar />

      <div className="relative bg-[#fffaf5] min-h-screen pt-20 pb-10 px-4 overflow-hidden">
        {/* Animated butterflies */}
        {[...Array(3)].map((_, i) => (
          <Image
            key={i}
            src="/Images/butterfly.png"
            alt="Butterfly"
            width={50}
            height={50}
            className={`butterfly absolute z-0 pointer-events-none animate-fly${i + 1}`}
            style={{ top: `${10 + i * 20}%`, left: `${i * 15}%` }}
          />
        ))}

        {/* Popup */}
        {submitted && (
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl text-center max-w-[90%] sm:max-w-md">
            <h2 className="text-2xl font-bold text-[#5a7238] mb-2">Thank you!</h2>
            <p>Your message has been sent. We'll get back to you soon!</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a7238] mb-4">Contact Us</h1>
          <p className="text-center mb-6 text-base sm:text-lg">
            We'd love to hear from you! Whether you have a question, feedback, or want to chat about your next event — send us a message below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
          >
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Input type="tel" name="phone" placeholder="Phone Number" />
            <Textarea name="message" placeholder="Your Message" rows={5} required />
            <Button type="submit" className="bg-[#e08119] hover:bg-[#c76f15] text-white" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Butterfly animation keyframes */}
        <style jsx global>{`
          @keyframes fly1 {
            0% { transform: translate(0vw, 0vh) rotate(0deg); }
            25% { transform: translate(25vw, -10vh) rotate(15deg); }
            50% { transform: translate(50vw, 0vh) rotate(-10deg); }
            75% { transform: translate(75vw, -15vh) rotate(10deg); }
            100% { transform: translate(100vw, 0vh) rotate(0deg); }
          }
          .animate-fly1 { animation: fly1 20s linear infinite; }
          .animate-fly2 { animation: fly1 20s linear infinite 5s; }
          .animate-fly3 { animation: fly1 20s linear infinite 10s; }
        `}</style>
      </div>

      <Footer />
    </>
  )
}
