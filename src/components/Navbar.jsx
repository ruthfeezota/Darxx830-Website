import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <section className="w-full bg-black">
      <nav className="mx-auto max-w-screen-2xl px-6 py-4 font-inter">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-white uppercase text-xl md:text-2xl font-extrabold tracking-wide font-boldonse"
          >
            DARXX830
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group relative z-[60] flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 group-hover:bg-[#FB823E] ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 group-hover:bg-[#FB823E] ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 group-hover:bg-[#FB823E] ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>

        
      </nav>
      {/* Divider line */}
        <div className="mt-1 h-px w-full bg-white/10" />

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in Menu Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-md border-l border-white/10 bg-[#0f0f0f] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel top line like the inspo */}
        <div className="px-8 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-white/70 uppercase text-xs tracking-[0.25em]">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition"
              aria-label="Close menu"
              type="button"
            >
              ✕
            </button>
          </div>
          <div className="mt-4 h-px w-full bg-white/10" />
        </div>

        {/* Big links (text comes out to the left) */}
        <div className="px-8 py-10">
          <ul className="space-y-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Music", href: "/music" },
              { label: "Shows", href: "/shows" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group block"
                >
                  <div className="flex items-end gap-4">
                    {/* Big text */}
                    <span className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white transition-colors group-hover:text-[#FB823E]">
                      {item.label}
                    </span>

                    {/* Outline echo text (subtle) */}
                    <span className="hidden md:inline text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-transparent stroke-1"
                      style={{
                        WebkitTextStroke: "1px rgba(251,130,62,0.35)",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Underline line */}
                  <div className="mt-3 h-px w-full bg-white/10 transition-colors group-hover:bg-[#FB823E]/50" />
                </a>
              </li>
            ))}
          </ul>

          {/* Footer mini info */}
          <div className="mt-12">
            <p className="text-white/50 text-sm">
              For bookings:{" "}
              <a
                href="mailto:booking@darxx830.com"
                className="text-white/80 hover:text-[#FB823E] transition"
              >
                djharkins@gmail.com
              </a>
            </p>

            <div className="mt-6 flex gap-4 text-white/60 text-sm uppercase tracking-widest">
              <a className="hover:text-[#FB823E] transition" href="#">
                IG
              </a>
              <a className="hover:text-[#FB823E] transition" href="#">
                YouTube
              </a>
              <a className="hover:text-[#FB823E] transition" href="#">
                Spotify
              </a>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
