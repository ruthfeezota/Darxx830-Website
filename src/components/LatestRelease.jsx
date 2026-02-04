import React from "react";
import CoverArt from "../assets/MainDARXX830.JPEG"; // swap with real cover
import VideoThumb from "../assets/MainDARXX830.JPEG"; // swap with video thumbnail (or same for now)

// Simple inline icons (no libraries needed)
function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M8 5v14l11-7z"
      />
    </svg>
  );
}
function IconSpotify() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.61 14.45c-.2.33-.62.43-.95.23-2.6-1.59-5.87-1.95-9.72-1.05-.37.09-.74-.14-.83-.51-.09-.37.14-.74.51-.83 4.2-.96 7.81-.56 10.72 1.23.33.2.43.62.23.93Zm1.35-2.9c-.25.41-.79.54-1.2.29-2.98-1.83-7.51-2.36-11.02-1.29-.46.14-.95-.12-1.09-.58-.14-.46.12-.95.58-1.09 4.01-1.22 8.98-.62 12.43 1.5.41.25.54.79.29 1.17Zm.11-3.03c-3.57-2.12-9.45-2.31-12.86-1.27-.55.17-1.13-.14-1.3-.69-.17-.55.14-1.13.69-1.3 3.92-1.2 10.45-.97 14.56 1.47.5.3.66.96.36 1.46-.3.5-.96.66-1.45.33Z"
      />
    </svg>
  );
}
function IconApple() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M16.37 1.9c0 1.14-.46 2.2-1.2 2.98-.8.84-2.08 1.49-3.22 1.4-.15-1.1.4-2.27 1.14-3.05.76-.8 2.12-1.4 3.28-1.33ZM20.7 17.1c-.62 1.45-.93 2.1-1.73 3.38-1.12 1.73-2.7 3.88-4.66 3.9-1.73.02-2.17-1.12-4.55-1.1-2.38.01-2.86 1.12-4.6 1.1-1.96-.02-3.46-1.95-4.58-3.68C.55 18.2-.55 14 .5 11.07c.76-2.12 2.58-3.45 4.26-3.48 1.7-.03 3.3 1.17 4.55 1.17 1.22 0 3.06-1.44 5.15-1.23.88.04 3.35.36 4.94 2.74-3.97 2.18-3.32 7.56.35 8.83Z"
      />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.7 26.7 0 0 0 2 12a26.7 26.7 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.7 26.7 0 0 0 22 12a26.7 26.7 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z"
      />
    </svg>
  );
}

const tracks = [
  { no: "01", title: "Everyday", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "02", title: "Dis Way", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "03", title: "Influence", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "04", title: "Why Not?!", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "05", title: "City Lights", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "06", title: "No Receipts", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "07", title: "Late Night Run", links: { yt: "#", sp: "#", ap: "#" } },
  { no: "08", title: "Copy Song", links: { yt: "#", sp: "#", ap: "#" } },
];

export default function LatestRelease() {
  return (
    <section id="latest" className="w-full bg-[#FB823E] text-black">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:py-16">
        {/* Top row: title + vinyl */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="text-[44px] sm:text-[64px] md:text-[84px] font-extrabold uppercase tracking-tight leading-[0.9]">
              Latest  <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(0,0,0,255)" }}
                > Release</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-black/70">
              After releasing a run of singles, DARXX830 is back with new music. Tap
              in, run it up, and share it with someone who needs it loud.
            </p>
          </div>

          {/* Vinyl badge */}
          <div className="hidden sm:block shrink-0">
            <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-black">
              <div className="absolute inset-[10px] rounded-full bg-black/80 border border-white/10" />
              <div className="absolute inset-[28px] rounded-full bg-[#FB823E]" />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
              <div className="absolute inset-0 rounded-full ring-1 ring-black/20" />
            </div>
          </div>
        </div>

        {/* Media row */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Cover / album art */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-black/10 border border-black/15">
              <img
                src={CoverArt}
                alt="Album cover"
                className="h-[280px] w-full object-cover md:h-[340px]"
              />
              {/* little meta pill row like template */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
                <span>2026</span>
                <span className="opacity-60">•</span>
                <span>EP</span>
                <span className="opacity-60">•</span>
                <span>8 Tracks</span>
              </div>
            </div>
          </div>

          {/* Video block */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-black/15 bg-black/10">
              <img
                src={VideoThumb}
                alt="Music video"
                className="h-[280px] w-full object-cover md:h-[340px]"
              />
              <button
                type="button"
                className="absolute inset-0 grid place-items-center"
                aria-label="Play video"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-black/70 text-white hover:bg-black/80 transition">
                  <IconPlay />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tracklist + Buy row */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Buy now pill */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-black/15 bg-black/5 p-5">
              <div className="text-xs uppercase tracking-[0.35em] text-black/60">
                Buy now
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition"
                >
                  <IconSpotify /> Spotify
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition"
                >
                  <IconApple /> Apple
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition"
                >
                  <IconYouTube /> YouTube
                </a>
              </div>

              <div className="mt-5 text-sm text-black/70">
                Latest single: <span className="font-semibold">“Everyday”</span>
              </div>
            </div>
          </div>

          {/* Tracklist */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-black/15 bg-black/5">
              <div className="px-5 py-4 border-b border-black/15 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.35em] text-black/60">
                  Tracklist
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-black/60">
                  Links
                </div>
              </div>

              <ul className="divide-y divide-black/15">
                {tracks.map((t) => (
                  <li key={t.no} className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-black/60 w-8">
                        {t.no}
                      </span>
                      <span className="text-sm md:text-base font-semibold">
                        {t.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-black">
                      <a
                        href={t.links.yt}
                        aria-label={`${t.title} on YouTube`}
                        className="rounded-full bg-black px-3 py-2 text-white hover:opacity-90 transition"
                      >
                        <IconYouTube />
                      </a>
                      <a
                        href={t.links.sp}
                        aria-label={`${t.title} on Spotify`}
                        className="rounded-full bg-black px-3 py-2 text-white hover:opacity-90 transition"
                      >
                        <IconSpotify />
                      </a>
                      <a
                        href={t.links.ap}
                        aria-label={`${t.title} on Apple Music`}
                        className="rounded-full bg-black px-3 py-2 text-white hover:opacity-90 transition"
                      >
                        <IconApple />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3 text-xs text-black/60">
              Tip: replace the links with real Spotify/Apple/YouTube URLs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
