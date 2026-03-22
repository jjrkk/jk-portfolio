import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid() {
  return (
    <section id="project-highlights" className="scroll-mt-20 py-16 md:py-24">
      {/* Section header — constrained width */}
      <div className="mx-auto mb-10 max-w-[1200px] px-6 md:mb-14 md:px-8 lg:px-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Selected work
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Case studies
        </h2>
      </div>

      {/* Horizontal scroll strip — bleeds to viewport edges */}
      <div
        className="no-scrollbar flex gap-4 overflow-x-auto pb-6 pl-6 pr-6 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {caseStudies.map((study, i) => (
          <div
            key={study.slug}
            style={{ scrollSnapAlign: "start" }}
            className="flex-shrink-0"
          >
            <CaseStudyCard study={study} index={i} />
          </div>
        ))}
        {/* Trailing spacer so last card doesn't sit flush against edge */}
        <div className="w-2 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
