'use client';

import Image from 'next/image';
import { Navbar } from "@/components/NavBar";
import { Header } from "@/components/Header";
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-gradient-to-b from-white to-[#f9ede5] text-[#3a2c27] leading-relaxed font-sans px-4 py-10">
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 space-y-6" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl text-[#5a7238] text-center font-[Parisienne]">Meet the Queen 👑</h1>
          <p>
            My sweet 1972 Cameo pull-behind camper. Although after a complete demo and renovation, starting all the way down to the framework, it may not be fair to say she’s a Cameo at all. She is a one-of-a-kind, handmade with a whole lotta love (sweat and tears included), hippy-dippy gem.
          </p>
          <p>
            Queen of Acorns was built on passion and creativity. She’s mastered the art of entertaining any event imaginable, serving up tasty cocktails, treats, and smiles to everyone in her presence!
          </p>
          <Image
            src="/Images/bailey4.jpg"
            alt="The Queen of Acorns Mobile Bar"
            width={1200}
            height={700}
            className="rounded-lg shadow-md mx-auto w-full h-auto"
          />

          <blockquote className="bg-[#fff7ef] border-l-4 border-[#e08119] italic text-base p-4 text-gray-800">
            “Vivacious and loving, she awakens the spark of life’s fervor in those who are around her. In touch with the freshness of life, she’s ruled by her heart’s passion. She’s wired by boundless energy and her sensitive yet fiery nature will keep her standing up for what she believes in...”
            <footer className="text-sm mt-2">– Spiritsong Tarot, Paulina Cassidy</footer>
          </blockquote>

          <h2 className="text-3xl sm:text-4xl text-[#5a7238] text-center font-[Parisienne]">Meet Bailey</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <p>
                Hi! I'm Bailey – creator and owner of Queen of Acorns. I’ve worked in hospitality for 12 years, spending most of that time behind the bar with a few years in restaurant management...
              </p>
              <Image
                src="/Images/bailey3.jpg"
                alt="Bailey smiling with her camper"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-4">
              <Image
                src="/Images/bailey2.jpg"
                alt="Bailey hosting a styled event"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <p>
                Queen of Acorns is rooted in my core values: integrity, equality, responsibility, gratitude, happiness, and determination...
              </p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl text-[#5a7238] text-center font-[Parisienne] mt-10">Our Mission</h2>
          <div className="flex flex-col md:flex-row gap-6 bg-[#f7f2ea] p-6 rounded-lg shadow-md">
            <div className="flex-1 space-y-4">
              <p>
                We aim to deliver honest, elevated mobile bartending services for any event – weddings, parties, corporate, and beyond...
              </p>
              <p>
                Every specialty cocktail we craft uses fresh-pressed juices, locally sourced ingredients, and flavors tailored to your vision...
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/Images/bailey1.jpg"
                alt="Signature drink from Queen of Acorns"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
