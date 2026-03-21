import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section
          id="top-of-page"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            Hero
          </p>
        </section>

        <section
          id="project-highlights"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            Case Studies
          </p>
        </section>

        <section
          id="product-development"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            Process
          </p>
        </section>

        <section
          id="about"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-muted text-sm tracking-widest uppercase">
            About
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
