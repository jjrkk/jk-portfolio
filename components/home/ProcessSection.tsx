"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processCategories } from "@/data/processSteps";

function SlashHeading({ heading, accent }: { heading: string; accent: string }) {
  return (
    <h3 className="text-2xl font-bold text-white md:text-3xl">
      {heading}{" "}
      <span className="text-accent">/</span>{" "}
      <span className="text-white">{accent}</span>
    </h3>
  );
}

export default function ProcessSection() {
  return (
    <section id="product-development" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        {/* Section heading */}
        <motion.h2
          className="mb-16 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          End to end product spectrum
        </motion.h2>

        {/* Three categories */}
        <div className="flex flex-col gap-20">
          {processCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Category heading + description */}
              <div className="mb-8">
                <SlashHeading heading={category.heading} accent={category.accent} />
                <p className="mt-3 max-w-2xl text-base text-muted">
                  {category.description}
                </p>
              </div>

              {/* Process cards — full-bleed image style, 2 col on md+, 1 col mobile */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.cards.map((card, cardIdx) => (
                  <motion.div
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "4/3" }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.4,
                      delay: catIdx * 0.05 + cardIdx * 0.05,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Full-bleed image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Bottom: title + description */}
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1.5 p-5">
                      <h4 className="text-sm font-semibold leading-snug text-white md:text-base">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-white/60">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
