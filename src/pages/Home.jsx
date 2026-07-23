import Hero from "@/sections/home/Hero";
import Expertise from "@/sections/home/Expertise";
import Testimonials from "@/sections/home/Testimonials";
import ClientsMarquee from "@/sections/home/ClientsMarquee";
import Partners from "@/sections/home/Partners";
import Footer from "@/components/layout/Footer";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Expertise />
      <Testimonials />
      <ClientsMarquee />
      <Partners />
      <Footer />
    </main>
  );
}

export default Home;
