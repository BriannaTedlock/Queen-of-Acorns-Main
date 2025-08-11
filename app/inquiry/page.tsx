'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/Header"
import { Navbar } from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

export default function InquiryPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string | string[]> = {}

    formData.forEach((value, key) => {
      if (key.endsWith("[]")) {
        const realKey = key.replace("[]", "");
        if (!data[realKey]) data[realKey] = [];
        (data[realKey] as string[]).push(value.toString());
      } else {
        data[key] = value.toString();
      }
    });

    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      window.location.href = "/thank-you"
      return
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="my-16 px-4">
        <div className="max-w-2xl mx-auto mb-8 text-center">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#222] mb-8">
    Elevate Your Event!
  </h1>
  <p className="text-base sm:text-lg text-[#3a2c27]">
    Contact us for <span className="font-semibold text-[#6d3b28]">BARTENDING & EVENT SERVICES</span>.<br />
    Fill out the form below, and we will get back to you shortly.<br />
    We look forward to working with you!
  </p>
</div>

        <Card className="max-w-3xl mx-auto p-6 sm:p-8 shadow-md bg-gradient-to-br from-[#fffaf5] to-[#fef2ea] rounded-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#a36d48]">
            Let’s Make Magic Happen ✨
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Main fields */}
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" />
            </div>
            <div>
              <Label htmlFor="event_date">Event Date</Label>
              <Input id="event_date" name="event_date" type='date' />
            </div>
            
            {/* --- GUEST COUNT as Dropdown --- */}
            <div>
              <Label htmlFor="guest_count">Estimated Guest Count</Label>
              <select
                id="guest_count"
                name="guest_count"
                required
                className="w-full p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="Under 25">Under 25</option>
                <option value="25-50">25-50</option>
                <option value="51-100">51-100</option>
                <option value="101-150">101-150</option>
                <option value="151-200">151-200</option>
                <option value="201+">201+</option>
              </select>
            </div>

            <div>
              <Label htmlFor="venue">Venue / Location</Label>
              <Input id="venue" name="venue" />
            </div>

            {/* --- IS THERE A BAR ON SITE: Radio --- */}
            <div>
              <Label>Is there a bar on-site?</Label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name="bar_onsite" value="Yes" required />
                  Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="bar_onsite" value="No" required />
                  No
                </label>
              </div>
            </div>
            
            {/* --- HOW LONG SHOULD BAR BE OPEN: Dropdown --- */}
            <div>
              <Label htmlFor="bar_duration">How long should the bar be open?</Label>
              <select
                id="bar_duration"
                name="bar_duration"
                required
                className="w-full p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
                <option value="4">4 Hours</option>
                <option value="5">5 Hours</option>
                <option value="6+">6+ Hours</option>
              </select>
            </div>

            {/* --- PUBLIC OR PRIVATE EVENT: Dropdown (see your note) --- */}
            <div>
              <Label htmlFor="event_type">Public or Private Event?</Label>
              <select
                id="event_type"
                name="event_type"
                required
                className="w-full p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="Public (Beverages for Purchase)">Public (Beverages for Purchase)</option>
                <option value="Public (Beverages Included)">Public (Beverages Included)</option>
                <option value="Private (Beverages for Purchase)">Private (Beverages for Purchase)</option>
                <option value="Private (Beverages Included)">Private (Beverages Included)</option>
              </select>
            </div>

            {/* --- HOW DID YOU HEAR ABOUT US: Dropdown --- */}
            <div>
              <Label htmlFor="referral">How did you hear about us?</Label>
              <select
                id="referral"
                name="referral"
                required
                className="w-full p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="Google/Search">Google/Search</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Wedding Website">Wedding Website</option>
                <option value="Vendor Referral">Vendor Referral</option>
                <option value="Friend/Word of Mouth">Friend/Word of Mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Bar Menu Checkboxes */}
            <div>
              <Label className="text-lg block mb-2 mt-8 font-bold">
                Tentative Bar Menu (select all that apply):
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-sm capitalize">
                {[
                  "Liquor",
                  "Beer",
                  "Wine",
                  "Specialty Cocktails",
                  "Specialty Mocktails",
                  "Frozen Drinks",
                  "Coffee / Tea",
                  "Hot Cocoa",
                  "Soft Drinks",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <Checkbox name="bar_menu[]" value={item} />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            {/* Add-ons */}
            <div>
              <Label className="text-lg block mb-2 mt-8 font-bold">
                Add-ons you&apos;re interested in (select all that apply):
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-sm capitalize">
                {[
                  "Champagne Service",
                  "Personalized Cups & Napkins",
                  "Balloon Arrangements",
                  "Floral Arrangements",
                  "Glassware Rental",
                  "Cocktail Tables Rental",
                  "Furniture Rental",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <Checkbox name="addons[]" value={item} />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            {/* Message */}
            <div>
              <Label htmlFor="message">Tell us about your event</Label>
              <Textarea id="message" name="message" rows={5} required className="bg-white" />
            </div>
            <Button type="submit" className="mx-auto block" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>
        </Card>
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
