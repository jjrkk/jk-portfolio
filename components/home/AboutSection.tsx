"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { careerHistory } from "@/data/careerHistory";
import { designPhilosophy } from "@/data/designPhilosophy";

const SKILLS = [
  "UX Design", "UI Design", "Product Design", "Service Design",
  "Interaction Design", "AI Design", "Design Systems", "UX Research",
  "User Testing", "Design Sprint", "Workshops", "Product Management",
  "Product Strategy", "Agile Development", "UAT", "Localization",
  "GTM Launch", "Product Marketing", "Leadership",
];

const PERSONAL = [
  {
    title: "Music lover—from jazz, rap, indie, to EDM",
    description: "If it has a good beat / melody, I'm in",
  },
  {
    title: "Keeping things fun with side projects",
    description: "Always building, tinkering, and designing",
  },
  {
    title: "Moving & staying pretty active",
    description: "...I take the stairs so I can justify more snacks",
  },
  {
    title: "Stepping on really crunchy leaves",
    description: "On the lookout for the perfect crunch",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, margin: "-60px" },
    transition: { duration: 0.5, delay },
  };
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">

        {/* ── Background bio ───────────────────────────────────────────── */}
        <motion.div className="mb-20" {...fadeUp()}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Background
          </h2>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Based in Toronto, Canada &amp; working in tech at startups &amp; agencies
              since 2009. U of T industrial engineering degree (human factors specialty)
              with expertise in full stack Product Design &amp; Product Management.
            </p>
            <p>
              Currently leading Design at{" "}
              <span className="text-white">Future Fertility</span>, driving the UX of
              AI-powered reproductive health tools for IVF &amp; egg freezing patients,
              embryologists, &amp; fertility doctors.
            </p>
            <p>
              Previously led product UX &amp; service design teams for global companies
              like Accenture, TD Bank, Metrolinx, Ford, Jeep, Medtronic, UHN, Movember,
              Synaptive Medical, &amp; more.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/justinkirkey"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            More on LinkedIn →
          </a>
        </motion.div>

        {/* ── Career timeline ──────────────────────────────────────────── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            Professional experience
          </h2>
          <div className="flex flex-col divide-y divide-white/8">
            {careerHistory.map((entry, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1 py-4 md:flex-row md:items-start md:gap-8"
                {...fadeUp(i * 0.04)}
              >
                <span className="w-36 flex-shrink-0 text-sm text-muted">
                  {entry.period}
                </span>
                <div className="flex flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      {entry.role}
                    </span>
                    {entry.note && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted">
                        {entry.note}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted">{entry.company}</span>
                    {entry.caseStudySlug && (
                      <Link
                        href={entry.caseStudySlug}
                        className="text-[10px] font-medium text-accent hover:underline"
                      >
                        Case Study →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Design philosophy ────────────────────────────────────────── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            Design Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designPhilosophy.map((principle, i) => (
              <motion.div
                key={principle.title}
                className="flex flex-col gap-2 rounded-xl border border-white/8 bg-card p-5"
                {...fadeUp(i * 0.06)}
              >
                <h4 className="text-sm font-semibold text-white">
                  {principle.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Skills ──────────────────────────────────────────────────── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted"
              >
                {skill}
              </span>
            ))}
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted">
              + More
            </span>
          </div>
        </motion.div>

        {/* ── Personal ────────────────────────────────────────────────── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Brownie &amp; greenie
          </p>
          <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            Personal
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAL.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col gap-2 rounded-xl border border-white/8 bg-card p-5"
                {...fadeUp(i * 0.07)}
              >
                <h4 className="text-sm font-semibold leading-snug text-white">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Get in touch ─────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.05)}>
          <div className="rounded-2xl bg-accent p-8">
            <p className="mb-6 text-xl font-bold text-white">
              👋🏼 Get in touch
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/justinkirkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                LinkedIn
              </a>
              <a
                href="https://adplist.org/mentors/justin-kirkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                ADPList
              </a>
              <a
                href="mailto:justin.kirkey@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
