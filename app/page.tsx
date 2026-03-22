import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />

        <CaseStudyGrid />

        <section
          id="product-development"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            Process — Coming in Phase 3
          </p>
        </section>

        <section
          id="about"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            About — Coming in Phase 3
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
