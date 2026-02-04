import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* thin divider like the rest of the site */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          {/* Left */}
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/60">
            © {new Date().getFullYear()} DARXX830
          </div>

          {/* Center (optional brand hit) */}
          <div className="hidden sm:block text-[11px] uppercase tracking-[0.35em] text-white/40">
            Austin, TX
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em]">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#FB823E] transition"
            >
              Instagram
            </a>

            <span className="text-white/20">•</span>

            <a
              href="mailto:booking@darxx830.com"
              className="text-white/70 hover:text-[#FB823E] transition"
            >
              Booking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
