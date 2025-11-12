// app/reviews/page.tsx
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/NavBar";

export default function ReviewsPage() {
  return (
    <>
    <Header />
    <Navbar/>
     <main className="container mx-auto px-4 py-10">
          <GoogleReviews facebookPageSlug={process.env.FACEBOOK_PAGE_SLUG} />
      </main>
      <Footer/>
      </>
  );
}
