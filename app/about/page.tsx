'use client';

import Image from 'next/image';
import { Navbar } from "@/components/NavBar";
import { Header } from "@/components/Header";
import Footer from '@/components/Footer';
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-gradient-to-b from-white to-[#f9ede5] text-[#3a2c27] leading-relaxed font-sans px-0 pb-10">

         {/* --- HERO SECTION: IMAGE LEFT, TEXT RIGHT --- */}
        <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Photo (left) */}
          <div className="flex-shrink-0 w-full max-w-[440px]">
            <Image
              src="/Images/bailey4.jpg"
              alt="Queen of Acorns Mobile Bar"
              width={440}
              height={330}
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Text (right) */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-[#2b3315]">
              Queen of Acorns Mobile Bar & Event Planning
            </h1>
            <p className="text-base sm:text-lg mb-4">
              Queen of Acorns was built on the basis of passion and creativity! We have mastered the art of entertaining for any event imaginable. Our vision is to become Kansas City’s premier, one stop shop for all your event planning and beverage & bartending needs.
            </p>
            <p className="text-base sm:text-lg">
              We guarantee to transform your events into memorable experiences through exceptional service, innovative drink offerings, and a vibrant, welcoming atmosphere. Queen of Acorns has developed a process that takes the stress out of event & bar planning, so that you can enjoy your events without having to lift a finger.
            </p>
          </div>
        </section>

        {/* --- MEET THE OWNER --- */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="border-t-4 border-[#2b3315] mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#2b3315]">Meet the Owner</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 order-2 md:order-1">
              <p className="text-center md:text-left text-lg leading-relaxed mb-4">
                Bailey Swimmer is the creator and owner of Queen of Acorns. With her 15+ years of experience in the hospitality industry, along with her degree from the International School of Professional Bartending, it only felt natural when she decided to start her own mobile bartending and event planning company.
                <br /><br />
                With appearances on KCTV5 and distinguished events under her belt, including Kansas City’s beloved Jazzoo, nothing phases her. Bailey takes great pride and responsibility in making her client’s visions come to life, whether big or small!
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <Image
                src="/Images/bailey3.jpg"
                alt="Bailey, Owner of Queen of Acorns"
                width={450}
                height={380}
                className="rounded-xl shadow-xl max-w-[350px] w-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </section>

        {/* --- MEET THE TEAM --- */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="border-t-4 border-[#2b3315] mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#2b3315]">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Images/About/KelseyCampbell.jpeg"
                alt="Kelsey Campbell"
                width={250}
                height={320}
                className="rounded-2xl mb-4 object-cover w-full max-w-[230px] h-[290px]"
              />
              <h3 className="font-bold text-xl mb-2">Kelsey Campbell</h3>
              <p className="text-base">
                Kelsey is our lead bartender at Queen of Acorns! She is always ready to shake up something extraordinary for our guests. Known for her warm smile and welcoming demeanor, Kelsey has a knack for making everyone feel at home! In her free time, she enjoys making jewelry and soaking up the sun with her cat, Jinx.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Images/About/KatieP.jpeg"
                alt="Katie P. Silverstein"
                width={250}
                height={320}
                className="rounded-2xl mb-4 object-cover w-full max-w-[230px] h-[290px]"
              />
              <h3 className="font-bold text-xl mb-2">Katie P. Silverstein</h3>
              <p className="text-base">
                Katie P. is a beloved bartender on the team! She loves working with Queen of Acorns because of the people she works with and the friends she has made. Outside of Queen of Acorns, she is a dedicated vet tech that strives to help the people and animals in the Kansas City community.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Images/About/RieKatahira.jpeg"
                alt="Rie Katahira"
                width={250}
                height={320}
                className="rounded-2xl mb-4 object-cover w-full max-w-[230px] h-[290px]"
              />
              <h3 className="font-bold text-xl mb-2">Rie Katahira</h3>
              <p className="text-base">
                Rie is another one of our exceptional bartenders! She truly embodies the spirit of fun, both with our team and the customers who visit Queen of Acorns. With a passion for crafting unique cocktails, she warmly invites everyone to come and join us for a great time.<br />Fun fact about Rie, she is from Japan!
              </p>
            </div>
          </div>
          {/* --- Secondary Team Cards Row --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-[290px] rounded-2xl mb-4 bg-[#f3f3ec] flex items-center justify-center">
                <Image
                  src="/Images/team_brianna.jpg"
                  alt="Brianna Tedlock"
                  width={160}
                  height={160}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Brianna Tedlock</h3>
              <p className="text-base">
                Bri is our amazing website and SEO specialist!
              </p>
            </div>
            {/* Team Member 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-[290px] rounded-2xl mb-4 bg-[#f3f3ec] flex items-center justify-center">
                <Image
                  src="/Images/team_laura.jpg"
                  alt="Laura Coates Randall"
                  width={160}
                  height={160}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Laura Coates Randall</h3>
              <p className="text-base">
                Laura creates all the wonderful content for our socials!
              </p>
            </div>
            {/* We Are Hiring Card */}
            <div className="flex flex-col items-center text-center justify-between">
              <div className="flex-1 flex flex-col items-center justify-center mb-4">
                <Image
                  src="/Images/hiring_sign.png"
                  alt="We are hiring"
                  width={170}
                  height={150}
                  className="object-contain mb-2"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">Event Coordinator</h3>
              <p className="text-base mb-4">
                This could be YOU! Looking for someone special to join our team and take on the challenge of being Queen of Acorns Event Coordinator. Click below to learn more!
              </p>
              <Link href="/join" className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#2b3315] font-semibold text-[#2b3315] bg-white hover:bg-[#f3f3ec] transition">
                Join Our Team
                <span className="ml-2">👉</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
