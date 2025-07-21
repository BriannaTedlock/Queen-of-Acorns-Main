'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from "@/components/NavBar";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="text-center px-4 py-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 leading-tight">
            WHY GO TO THE BAR,<br />WHEN THE BAR CAN COME TO YOU!
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mt-6 text-gray-600">
            Our top-notch beverage catering & bartending services take the stress out of bar planning,
            and allow you to SIP back while we transform your event into an unforgettable celebration!
          </p>
          <div className="mt-8 space-y-4">
            <Link href="/inquiry">
              <Image
                src="/Images/btn-free-quote.png"
                alt="Get a Free Quote"
                width={230}
                height={60}
                className="mx-auto hover:scale-105 transition-transform"
              />
            </Link>
            <Image
              src="/Images/stars-5.png"
              alt="5 Star Rating"
              width={120}
              height={24}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Featured on KC Live */}
        <section className="px-4 py-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Featured on myKC Live!</h2>
          <a
            href="https://www.kctv5.com/2024/10/09/queen-acorns-tailgate-drinks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/HomePageEvent/freezeframe.png"
              alt="Queen of Acorns on myKC Live"
              width={600}
              height={400}
              className="mx-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full max-w-xl"
            />
          </a>
          <p className="text-sm text-gray-600 italic mt-4">
            <span className="block">myKC Live appearance — October 7th, 2024</span>
            <span>(Click image to watch)</span>
          </p>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {[
            {
              icon: 'icon-license.png',
              title: 'LICENSED & INSURED',
              desc: 'Licensed in KS & MO to sell and serve liquor. Fully insured. ServSafe certified bartenders.'
            },
            {
              icon: 'icon-relax.png',
              title: 'HASSLE FREE',
              desc: 'We handle everything. Easy to work with and flexible to your needs.'
            },
            {
              icon: 'icon-diamond.png',
              title: 'UNIQUE EXPERIENCE',
              desc: 'Specialty cocktails, interactive service, custom themes & menus!'
            }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-xl shadow p-6 w-full sm:w-[300px] text-center hover:-translate-y-1 transition">
              <Image src={`/Images/${icon}`} alt={title} width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </section>

        {/* Event Types */}
        <section className="max-w-2xl mx-auto px-4 py-12 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">What Events Can We Do?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base sm:text-lg">
            {[
              "Weddings",
              "Corporate Events",
              "Fundraisers",
              "Birthday Parties",
              "Graduations",
              "Festivals",
              "Farmers Markets",
              "Holiday Gatherings",
              "Anniversary Celebrations",
              "Baby & Bridal Showers",
              "Bachelor(ette) Parties",
              "Family Reunions",
              "Retirement Parties"
            ].map((item) => (
              <li key={item} className="relative pl-6 before:content-['🍸'] before:absolute before:left-0">{item}</li>
            ))}
          </ul>
        </section>

        {/* How Booking Works */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-8">HOW BOOKING WORKS</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { step: '1. Choose a Package', desc: 'Pick a bar package that fits your vision and guest count.' },
              { step: '2. Add Your Extras', desc: 'Enhance your experience with cocktail upgrades or rentals.' },
              { step: '3. Let’s Plan', desc: 'We work closely with you to finalize every little detail.' },
              { step: '4. Raise a Glass', desc: 'We show up, set up, shake it up—and clean it all up too!' }
            ].map(({ step, desc }) => (
              <div key={step} className="step w-full sm:w-[260px] p-6 border-2 border-dashed border-yellow-700 bg-yellow-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{step}</h3>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-12">Client Testimonials</h2>
          <div className="space-y-10 max-w-3xl mx-auto">
            {[
              {
                name: 'Dave Eckert',
                quote: 'Great people. Great cocktails. Great experience. I highly recommend them!',
                image: 'avatar1.png',
              },
              {
                name: 'Alexis Burnett',
                quote: 'Everyone loved the drinks, service, and overall experience! You also can’t beat the prices. Best in KC hands down!',
                image: 'avatar2.png',
              },
              {
                name: 'Chris Greene',
                quote: 'Bailey was amazing at our Grand Opening. Her attention to detail and amazing customer service was more than we could expect.',
                image: 'avatar3.png',
              },
            ].map((t) => (
              <div key={t.name} className="testimonial">
                <Image src={`/Images/${t.image}`} alt={t.name} width={50} height={50} className="mx-auto mb-2 rounded-full" />
                <p className="italic text-gray-700 mb-2">“{t.quote}”</p>
                <strong className="block font-medium text-sm">- {t.name}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="px-4 py-16 text-center bg-white" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-800">We’re Proudly 5-Star Rated</h2>
          <Image
            src="/Images/5star-google.png"
            alt="5 Star Google Reviews"
            width={180}
            height={40}
            className="mx-auto my-4"
          />
          <p className="text-sm text-gray-700 mt-2">
            Thank you to all of our amazing clients who trust us to pour the magic!
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-10">
            {['award-1.png', 'award-2.png', 'award-3.png', 'award-4.png', 'award-5.png'].map((src, i) => (
              <Image
                key={i}
                src={`/Images/${src}`}
                alt={`Award ${i + 1}`}
                width={120}
                height={120}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
