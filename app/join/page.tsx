'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Navbar } from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function JoinPage() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    // Use your own API endpoint
    const response = await fetch('/api/join', {
      method: 'POST',
      body: formData,
    })

    setLoading(false)

  

   if (response.ok) {
    form.reset()
    window.location.href = "/join-thank-you"   // or use router.push if you prefer  
    }
  }
  

  return (
    <>
      <Header />
      <Navbar />

          <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6d3b28] mb-4">
        Join Our Team!
      </h1>
      <p className="text-center text-base sm:text-lg text-[#3a2c27] max-w-2xl mx-auto mb-8">
        Contact us to learn more about how you can become a part of the Queen of Acorns mobile bar &amp; event planning family.<br />
        Fill out the form below, and we will get back to you shortly.<br />
        We look forward to meeting you!
      </p>

        <Card className="p-6 sm:p-8 shadow-md bg-white rounded-xl">
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <Label htmlFor="position">Interested Position</Label>
              <select name="position" id="position" required className="w-full p-2 border rounded">
                <option value="">Select a role</option>
                <option value="Bartender">Bartender</option>
                <option value="Management">Management</option>
                <option value="Event Coordinator">Event Coordinator</option>
                <option value="Social Media Coordinator">Social Media Coordinator</option>
                <option value="Cocktail Curator">Cocktail Curator</option>
              </select>
            </div>
            <div>
              <Label htmlFor="resume">Upload Your Resume</Label>
              <Input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
            </div>
            <div>
              <Label htmlFor="message">Tell us about yourself</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Why do you want to work with us?"
              />
            </div>
            <Button type="submit" className="w-full bg-[#a36d48] hover:bg-[#8e5d3c] text-white" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </Card>
      </section>

      <Footer />
    </>
  )
}
