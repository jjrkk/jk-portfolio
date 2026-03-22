import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid() {
  return (
    <section id="project-highlights" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Selected work
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Project highlights
          </h2>
        </div>

        {/* Grid: 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
