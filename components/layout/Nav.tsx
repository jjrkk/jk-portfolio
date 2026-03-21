"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "#project-highlights" },
  { label: "Process", href: "#product-development" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="#top-of-page"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">jk</span>
          <span className="text-accent">/</span>
        </Link>

        {/* Centre pill nav — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-nav-pill px-2 py-1.5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-1.5 text-sm font-medium text-white/80 rounded-full transition-colors duration-150 hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Reach out — ghost + green availability dot */}
          <a
            href="https://www.linkedin.com/in/justinkirkey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:border-white/40 hover:text-white md:px-4"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
            <span className="hidden sm:inline">Reach out</span>
          </a>

          {/* Résumé — solid accent button */}
          <a
            href="https://drive.google.com/file/d/1h0HfLLc7f9PIux_H52rgf-qihaPk7JNu/view"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-white transition-opacity duration-150 hover:opacity-90 md:px-4"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
