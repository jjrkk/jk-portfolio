"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HexPhoto from "./HexPhoto";
import TagPills from "./TagPills";

const CYCLING_DESCRIPTORS = [
  "Product / design",
  "AI-fluent",
  "Full-stack",
  "Healthtech",
];

const CYCLE_INTERVAL = 3000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CYCLING_DESCRIPTORS.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top-of-page"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[55%] top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute left-[60%] top-[30%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 py-24 md:flex-row md:items-center md:gap-16 md:px-8 md:py-32 lg:px-12">
        {/* Left — text */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* "Hello there" eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-muted uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Hello there!
          </div>

          {/* Headline */}
          <h1 className="mb-2 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            I&apos;m Justin,
          </h1>

          {/* Cycling descriptor */}
          <div className="relative mb-1 h-[1.2em] overflow-hidden text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                className="block text-accent"
              >
                {CYCLING_DESCRIPTORS[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Leader &amp; do-er
          </h1>

          {/* Tag pills */}
          <TagPills />

          {/* CTA */}
          <Link
            href="#project-highlights"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
          >
            Check out my work
            <span aria-hidden="true">↓</span>
          </Link>
        </div>

        {/* Right — hex photo */}
        <div className="flex flex-shrink-0 items-center justify-center md:w-[360px] lg:w-[420px]">
          <HexPhoto />
        </div>
      </div>
    </section>
  );
}
