"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

interface Props {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: Props) {
  const isLive = study.isLive;

  const cardContent = (
    <motion.div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card transition-all duration-300 ${
        isLive
          ? "cursor-pointer hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "cursor-default opacity-70"
      }`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0, 0, 1] }}
      whileHover={isLive ? { scale: 1.015 } : {}}
    >
      {/* Cover image — portrait 3:4 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy/60">
        {isLive ? (
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Coming soon — gradient placeholder */
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-white/3 to-white/5" />
        )}

        {/* Coming soon overlay */}
        {!isLive && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/60 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/20 bg-navy/80 px-4 py-1.5 text-xs font-medium text-muted">
              Case Study Coming Soon!
            </span>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="flex flex-col gap-2 p-4">
        {/* Year + badge row */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">{study.year}</span>
          {isLive && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              Case Study
              <span className="ml-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                →
              </span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug text-white">
          {study.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (!isLive) return cardContent;

  return (
    <Link href={study.fullPath} className="block h-full">
      {cardContent}
    </Link>
  );
}
