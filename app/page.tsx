import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <CaseStudyGrid />
        <ProcessSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
