'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from "@/components/NavBar";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';
import ScrollPlayVideo from '@/components/ScrollPlayVideo';
import CocktailCarousel, { Cocktail } from '@/components/CocktailCarousel';

export default function Home() {
 const cocktails: Cocktail[] = [
    { name: "Cherry Aperol Bourbon n' Coke", image: "/Images/Cocktails/CherryAperolBourbonCoke.jpeg" },
    { name: "Dragonberry Hibiscus Rum Mule", image: "/Images/Cocktails/DragonBerryHibiscusRumMule.jpeg" },
    { name: "Expresso Martini", image: "/Images/Cocktails/ExpressoMartini.jpeg" },
    { name: "Frose and Apple Cider Mule", image: "/Images/Cocktails/FroseandAppleCiderMule.jpeg" },
    { name: "Mandarin Creamsicle Margarita", image: "/Images/Cocktails/MandarinCreamsicleMargarita.jpeg" },
    { name: "Old Fashioned & Paloma", image: "/Images/Cocktails/OldFashionedandPaloma.jpeg" },
    { name: "Pina Colada & Margarita Funnel Cake", image: "/Images/Cocktails/PinaColadaMargaritaandFrozenFunnelCake.jpeg" },
    { name: "The Queen Bee", image: "/Images/Cocktails/TheQueenBee.png" },
    { name: "Upside Down Pineapple Cake", image: "/Images/Cocktails/UpsideDownPineappleCake.jpeg" },
    { name: "Whiskey Caramel Apple Pop", image: "/Images/Cocktails/WhiskeyCaramelApplePop.jpeg" },
    { name: "Sparklin' Raspberry Sherbert", image: "/Images/Cocktails/SparklinRaspberrySherbert.jpeg" },
    { name: "S'mores Martini", image: "/Images/Cocktails/SmoresMartini.jpeg" },
    { name: "Spiked Cherry Limeade", image: "/Images/Cocktails/SpikedCherryLimeade.jpeg" },
    { name: "Watermelon Margarita | Cucumber & Mint Matcha Martini", image: "/Images/Cocktails/WMCMMM.jpeg" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16" data-aos="fade-up">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-14">
        
        {/* Left: Text */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 leading-tight">
            WHY GO TO THE BAR,<br />WHEN THE BAR CAN COME TO YOU!
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mt-6 text-gray-600">
            Our top-notch beverage catering & bartending services take the stress out of bar planning,
            and allow you to SIP back while we transform your event into an unforgettable celebration!
          </p>

          {/* Free Quote + Stars */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link href="/inquiry">
              <Image
                src="/Images/btn-free-quote.png"
                alt="Get a Free Quote"
                width={260}
                height={68}
                className="hover:scale-105 transition-transform"
              />
            </Link>
            <Image
              src="/Images/stars-5.png"
              alt="5 Star Rating"
              width={140}
              height={28}
            />
          </div>
        </div>

        {/* Right: Promo Video */}
       <div className="w-full">
  <div
    className="
      relative w-full overflow-hidden rounded-3xl bg-black pb-[56.25%]
      ring-1 ring-black/10 shadow-xl
      transition hover:ring-4 hover:ring-emerald-300/60 hover:shadow-2xl
      focus-visible:ring-4 focus-visible:ring-emerald-300/70
      [@media(prefers-reduced-motion:reduce)]:transition-none
    "
    tabIndex={0}
  >
    <ScrollPlayVideo
      src="https://cqpq0knj64bowgo5.public.blob.vercel-storage.com/Promo_Video.MP4"
      parallax
      driftPx={10}     // tweak 8–12 for subtlety
      // resetOnView     // enable if you want it to restart each time
    />
  </div>
</div>
      </div>
    </section>

{/* Why Choose Us */}
<section className="max-w-6xl mx-auto px-4 py-16" data-aos="fade-up">
  <h2
    className="
      text-3xl sm:text-4xl font-extrabold text-black text-center mb-10 tracking-tight
      border-t-4 border-black pt-8 pb-2
    "
    style={{ borderBottom: 'none' }}
  >
    WHY CHOOSE US?
  </h2>
  <div className="flex flex-col md:flex-row gap-8 justify-center items-start md:items-stretch mt-8">
    {/* Feature 1 */}
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <Image src="/Images/icon-license.png" alt="Licensed & Insured" width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-bold mb-3 text-black text-center">LICENSED & INSURED</h3>
      <ul className="text-base text-gray-700 space-y-3 mt-4">
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Licensed in KS & MO to sell and serve liquor.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Fully insured, including liquor liability.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          All bartenders are ServSafe certified ensuring a safe environment for you & your guests.
        </li>
      </ul>
    </div>
    {/* Feature 2 */}
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <Image src="/Images/icon-relax.png" alt="Hassle Free" width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-bold mb-3 text-black text-center">HASSLE FREE</h3>
      <ul className="text-base text-gray-700 space-y-3 mt-4">
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Trust us – you don’t have to lift a finger! We will take all the bar planning off your plate. You can be involved in the process as little or as much as you would like.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Convenient and easy to work with.
        </li>
      </ul>
    </div>
    {/* Feature 3 */}
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <Image src="/Images/icon-diamond.png" alt="Unique Experience" width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-bold mb-3 text-black text-center">UNIQUE EXPERIENCE</h3>
      <ul className="text-base text-gray-700 space-y-3 mt-4">
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Specialty cocktails that will have your guests talking long after the event is over.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Elevated and interactive customer experience paired with exceptional service.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-700 text-lg mt-1">✔️</span>
          Customizable to your event and theme!
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16" data-aos="fade-up">
   <h2
    className="
      text-3xl sm:text-4xl font-extrabold text-black text-center mb-10 tracking-tight
      border-t-4 border-black pt-8 pb-2
    "
    style={{ borderBottom: 'none' }}
  ></h2>
  <div className="flex flex-col md:flex-row items-center gap-12 bg-white/70 rounded-3xl shadow-lg p-8">
    {/* Left: KC Live Feature Image with Link & Caption */}
    <div className="flex-1 flex flex-col items-center">
      <a
        href="https://www.kctv5.com/2024/10/09/queen-acorns-tailgate-drinks/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/Images/HomePageEvent/freezeframe.png"
          alt="Queen of Acorns on myKC Live"
          width={400}
          height={260}
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 max-w-full"
        />
      </a>
      <p className="text-sm text-gray-600 italic mt-3 text-center">
        myKC Live appearance — October 7th, 2024<br />
        (Click image to watch)
      </p>
    </div>

    {/* Right: Event Types List */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">What Events Can We Do?</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base sm:text-lg mb-4">
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
          <li key={item} className="relative pl-8 flex items-center">
            <span className="absolute left-0 text-green-700 text-xl">🍸</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 italic mt-2">
        Have something unique in mind? Let’s chat about your special event!
      </p>
    </div>
  </div>
</section>
  <div className="mt-12 flex flex-col items-end">
  <span
    className="font-extrabold mt-2 text-left"
    style={{
      fontSize: "22.5px",
      marginRight: "18.25rem", // about 20px, adjust as needed
    }}
  >
    Take a peek at our cocktail look-book!
  </span>
</div>


        {/* Cocktail Look-Book Section */}
<section className="max-w-6xl mx-auto px-4 py-16" data-aos="fade-up">
  <div className="flex flex-col md:flex-row items-center gap-12 bg-white/70 rounded-3xl shadow-lg p-8">
    {/* Left: Description */}
    <div className="flex-1">
  <h2 className="text-3xl font-extrabold text-black mb-8 text-left">
    WHY OUR COCKTAILS ARE THE BEST…
  </h2>
  <p className="text-lg text-black mb-10 leading-relaxed text-left">
    We take great pride in creating the most magical specialty cocktails. All of our syrups are made in house using local and organic ingredients, and our juices are freshly pressed. Each cocktail is carefully crafted to concoct a harmonious balance of sweet & sour, fruity & herbal, and rich & refreshing flavors.
  </p>
  <p className="text-lg text-black leading-relaxed text-left">
    Flip through the look-book to get a glimpse of the libations that can be served at your next event!
  </p>

  {/* Solid line + subheading */}
  <div className="my-10">
    <hr className="border-t-4 border-black w-full mb-2" />
    <p className="text-3xl font-extrabold text-black mt-6 text-left">
      HOW BOOKING WITH US WORKS
    </p>
    <p className="text-lg text-black mt-4 text-left">
      It’s as easy as…
    </p>
  </div>
</div>


    {/* Right: Carousel */}
    <div className="flex-1 w-full flex flex-col items-center">
      <CocktailCarousel cocktails={cocktails} />
      </div>
      </div>
</section>

      
   {/* How Booking Works */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
  {/* STEP 1 */}
  <div className="flex-1 flex flex-col items-center">
    <div className="text-5xl font-bold text-black mb-2">1.</div>
    <h3 className="text-xl font-bold text-black mb-2 text-center">SUBMIT AN INQUIRY FORM</h3>
    {/* "Here" button with hand icon */}
    <Link href="/inquiry" passHref>
    <button
      className="flex items-center border-2 border-black rounded-full px-8 py-2 font-bold text-lg my-3 hover:bg-gray-100 transition"
      style={{ fontFamily: '"Canva Sans", sans-serif' }}
      type="button"
    >
       Click Here
      <Image src="/Images/click.png" alt="Click" width={28} height={28} className="ml-2" />
    </button>
    </Link>
    <p className="text-base text-black mt-2 text-center max-w-xs">
      To get started, the first step is to submit an inquiry form, which you can easily access by clicking the “Here” button above.
      <br /><br />
      The inquiry form is designed to take just a couple minutes of your time, and it allows us to gather some basic information about your event needs.
    </p>
  </div>

  {/* STEP 2 */}
  <div className="flex-1 flex flex-col items-center">
    <div className="text-5xl font-bold text-black mb-2">2.</div>
    <h3 className="text-xl font-bold text-black mb-2 text-center">
      SCHEDULE A CONSULTATION & RESERVE YOUR EVENT DATE
    </h3>
    <p className="text-base text-black mt-4 text-center max-w-xs">
      Once your inquiry has been received, we’ll reach out to schedule a phone consultation.
      <br /><br />
      This consultation gives us an opportunity to discuss your event in a more detailed manner, reviewing the overall theme of your event and any customizations you have in mind.
      <br /><br />
      We will write up a free quote, and after you have reviewed and accepted, a deposit can be made to secure your event date!
    </p>

  </div>

  {/* STEP 3 */}
  <div className="flex-1 flex flex-col items-center">
    <div className="text-5xl font-bold text-black mb-2">3.</div>
    <h3 className="text-xl font-bold text-black mb-2 text-center">
      SIP BACK & ENJOY YOUR PARTY!
    </h3>
    <p className="text-base text-black mt-4 text-center max-w-xs">
      Working with us allows you to enjoy your event without any worries or stress.
      <br /><br />
      We will stay in touch prior to the scheduled event date, but you can trust us to take it from here!
      <br /><br />
      Our booking process is really that SIMPLE.
    </p>
  </div>
</div>
        {/* Testimonials */}
        <section className="px-4 py-16 text-center" data-aos="fade-up">
  <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
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
      <div
        key={t.name}
        className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-full md:w-96 mx-auto transition hover:-translate-y-1"
      >
        {/* Optional: Star or quote icon */}
        <span className="text-3xl text-yellow-400 mb-3">★★★★★</span>
        {/* Avatar with colored ring */}
        <div className="mb-3">
          <Image
            src={`/Images/${t.image}`}
            alt={t.name}
            width={70}
            height={70}
            className="rounded-full border-4 border-green-700"
          />
        </div>
        <p className="italic text-gray-700 text-lg mb-3">“{t.quote}”</p>
        <strong className="block font-bold text-green-800 text-base">- {t.name}</strong>
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
          {/* Medium-width Awards Image with Cropping */}
            <div className="w-full flex justify-center my-4">
              <Image
                src="/Images/awards_choice.png"
                alt="Queen of Acorns Awards"
                width={1200}
                height={400}
                className="w-full max-w-4xl h-64 object-cover rounded-lg shadow-md"
                priority
              />
            </div>


        </section>

        <Footer />
      </main>
    </>
  )
}
