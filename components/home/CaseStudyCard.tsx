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

  const card = (
    <motion.div
      className={`relative flex h-full w-[300px] flex-shrink-0 overflow-hidden rounded-2xl md:w-[340px] lg:w-[360px] ${
        isLive ? "cursor-pointer" : "cursor-default"
      }`}
      style={{ aspectRatio: "3/4" }}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0, 0, 1] }}
      whileHover={isLive ? { scale: 1.02 } : {}}
    >
      {/* Background image */}
      {isLive ? (
        <Image
          src={study.coverImage}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="360px"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-white/3 to-white/5" />
      )}

      {/* Dark gradient overlay — bottom half for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top-left: company + badge */}
      <div className="absolute left-4 top-4 flex flex-col gap-2">
        <span className="w-fit rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          Case Study
        </span>
      </div>

      {/* Coming-soon overlay */}
      {!isLive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/20 bg-navy/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
            Case Study Coming Soon!
          </span>
        </div>
      )}

      {/* Bottom: year, title, tags */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-5">
        <span className="text-xs font-medium text-white/60">{study.year}</span>
        <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
          {study.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/70 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (!isLive) return <div className="opacity-60">{card}</div>;

  return (
    <Link href={study.fullPath} className="group block">
      {card}
    </Link>
  );
}
