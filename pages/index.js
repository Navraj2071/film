import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Features from "@/components/features/features";
import HowItWorks from "@/components/howItWorks/howItWorks";
import Team from "@/components/team/team";
import Roadmap from "@/components/roadmap/roadmap";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Team />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  );
}
