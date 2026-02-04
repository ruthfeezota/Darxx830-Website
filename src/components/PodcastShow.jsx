import React from "react";
import ShowImage from "../assets/MainDARXX830.JPEG"; // swap with show cover/promo image

const episodes = [
  {
    title: "Episode 01 — Origin Story",
    date: "02.01.2026",
    link: "https://instagram.com/", // replace
    note: "Behind the name + why the sound changed.",
  },
  {
    title: "Episode 02 — Studio Nights",
    date: "02.08.2026",
    link: "https://instagram.com/", // replace
    note: "How a track goes from idea → release.",
  },
  {
    title: "Episode 03 — Real Life vs Rap Life",
    date: "02.15.2026",
    link: "https://instagram.com/", // replace
    note: "Mindset, discipline, and staying consistent.",
  },
];

export default function PodcastShow() {
  return (
    <section id="podcast" className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className=" bg-black">
          {/* Header */}
          <div className="flex items-start justify-between gap-6 p-8 md:p-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                  On Instagram
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FB823E]" />
                </span>
                <span className="hidden sm:inline">Live talk • clips • guests</span>
              </div>

              <h2 className="mt-6 text-[44px] sm:text-[60px] md:text-[78px] font-extrabold uppercase leading-[0.9] tracking-tight">
                <span className="text-[#FB823E]">Podcast</span>{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(251,130,62,0.55)" }}
                >
                  Show
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-xs sm:text-sm text-white/60 leading-relaxed">
                Short episodes, real conversations. New clips and full shows posted on Instagram.
              </p>
            </div>

            {/* Small badge icon */}
            <div className="hidden sm:grid shrink-0 place-items-center h-16 w-16 rounded-full border border-white/15 bg-white">
              {/* IG-style camera icon */}
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FB823E]">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17.8 7.2a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8Z"
                />
              </svg>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left media card */}
            <div className="lg:col-span-5 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="p-6 md:p-8">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src={ShowImage}
                    alt="Podcast show cover"
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />

                  {/* Label + CTA overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 py-4">
                      <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                        Featured clip
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        “Behind the bars” 🎙️
                      </div>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href="https://instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-[#FB823E] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-black hover:brightness-110 transition"
                        >
                          Watch on IG
                        </a>

                        <a
                          href="https://instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-[#FB823E] hover:border-[#FB823E]/60 transition"
                        >
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional note */}
                <div className="mt-5 text-xs uppercase tracking-[0.35em] text-white/50">
                  Weekly drops • clips + full episodes
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="lg:col-span-7 p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Latest episodes
                </div>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-[0.35em] text-white/60 hover:text-[#FB823E] transition"
                >
                  View all ↗
                </a>
              </div>

              <div className="divide-y divide-white/10">
                {episodes.map((ep) => (
                  <div key={ep.title} className="py-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm md:text-base font-semibold uppercase tracking-wide">
                        {ep.title}
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {ep.note}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="hidden sm:block text-xs uppercase tracking-[0.35em] text-white/50">
                        {ep.date}
                      </div>

                      <a
                        href={ep.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-black hover:bg-[#FB823E] transition"
                      >
                        Watch <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional embed slot (paste IG embed here later) */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Embed (optional)
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Paste an Instagram post/reel embed here later if you want it to live inside the site.
                </p>
                <div className="mt-4 h-28 rounded-xl border border-dashed border-white/15 bg-black/10" />
              </div>
            </div>
          </div>
        </div>

       
      </div>
       {/* divider under the panel */}
        <div className="h-px w-full bg-white/10" />
    </section>
  );
}
