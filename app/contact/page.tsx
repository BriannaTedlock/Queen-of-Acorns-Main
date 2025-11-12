'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Auto-hide success after 4s
  useEffect(() => {
    if (!submitted) return
    const t = setTimeout(() => setSubmitted(false), 4000)
    return () => clearTimeout(t)
  }, [submitted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => (data[key] = value.toString()))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j?.detail || j?.error || 'Failed to send. Please try again.')
      }

      // ✅ reset + show success
      formRef.current?.reset()
      setSubmitted(true)
    } catch (err: any) {
      setError(err?.message || 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
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

        {/* Success popup */}
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* optional dim backdrop */}
            <div className="absolute inset-0 bg-black/20" onClick={() => setSubmitted(false)} />
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl text-center max-w-[90%] sm:max-w-md">
              <h2 className="text-2xl font-bold text-[#5a7238] mb-2">Thank you!</h2>
              <p>Your message has been sent. We&apos;ll get back to you soon!</p>
              <Button
                className="mt-4 bg-[#5a7238] hover:bg-[#446022] text-white"
                onClick={() => setSubmitted(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5a7238] mb-4">Contact Us</h1>
          <p className="text-center mb-6 text-base sm:text-lg">
            We&apos;d love to hear from you! Whether you have a question, feedback, or want to chat about your next event — send us a message below.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
          >
            <Input type="text" name="name" placeholder="Your Name" />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Input type="tel" name="phone" placeholder="Phone Number" />
            <Textarea name="message" placeholder="Your Message" rows={5} required />

            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">{error}</p>
            )}

            <Button
              type="submit"
              className="bg-[#5a7238] hover:bg-[#446022] text-white"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
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
