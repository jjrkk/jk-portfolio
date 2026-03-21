import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8 md:py-10">
        {/* Top row: logo + links */}
        <div className="flex items-center justify-between">
          <Link href="#top-of-page" className="text-lg font-bold tracking-tight">
            <span className="text-white">jk</span>
            <span className="text-accent">/</span>
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/justinkirkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Reach out
            </a>
            <a
              href="https://drive.google.com/file/d/1h0HfLLc7f9PIux_H52rgf-qihaPk7JNu/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Résumé
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs text-muted">
          © 2025 | Justin Kirkey | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
