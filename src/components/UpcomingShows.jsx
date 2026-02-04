import React from "react";

const shows = [
  {
    city: "Austin",
    country: "TX",
    venue: "Mohawk",
    date: "03.10.2026",
    ticket: "#",
    soldOut: false,
  },
  {
    city: "Dallas",
    country: "TX",
    venue: "House of Blues",
    date: "03.15.2026",
    ticket: "#",
    soldOut: true,
  },
  {
    city: "Houston",
    country: "TX",
    venue: "White Oak Music Hall",
    date: "03.24.2026",
    ticket: "#",
    soldOut: false,
  },
  {
    city: "San Antonio",
    country: "TX",
    venue: "Paper Tiger",
    date: "04.05.2026",
    ticket: "#",
    soldOut: false,
  },
];

function UpcomingShows() {
  return (
    <section id="shows" className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="bg-black">
          {/* Header row */}
          <div className="flex items-start justify-between gap-6 p-8 md:p-12 border-b border-white/10">
            <div>
              <h2 className="text-[44px] sm:text-[60px] md:text-[78px] font-extrabold uppercase leading-[0.9] tracking-tight">
                <span className="text-[#FB823E]">Upcoming</span>{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(251,130,62,0.55)" }}
                >
                  Shows
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-xs sm:text-sm text-white/60">
                Find me on the road. Tickets drop fast. Tap in early.
              </p>
            </div>

            {/* Globe badge */}
            <div className="shrink-0">
              <div className="grid place-items-center h-16 w-16 rounded-full border border-white/15 bg-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 text-[#FB823E]"
                >
                  <path
                    d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 12h20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2c2.7 2.7 4.2 6.3 4.2 10S14.7 19.3 12 22c-2.7-2.7-4.2-6.3-4.2-10S9.3 4.7 12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-8 md:px-12 py-5 text-xs uppercase tracking-[0.35em] text-white/50 border-b border-white/10">
            <div className="col-span-3">City</div>
            <div className="col-span-5">Venue</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2 text-right">Tickets</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10">
            {shows.map((s) => (
              <div
                key={`${s.city}-${s.date}`}
                className="grid grid-cols-12 items-center gap-4 px-8 md:px-12 py-6"
              >
                <div className="col-span-3">
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    {s.city}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                    {s.country}
                  </div>
                </div>

                <div className="col-span-5 text-sm text-white/80 uppercase tracking-wide">
                  {s.venue}
                </div>

                <div className="col-span-2 text-sm text-[#FB823E] uppercase tracking-wide">
                  {s.date}
                </div>

                <div className="col-span-2 flex justify-end">
                  {s.soldOut ? (
                    <span className="inline-flex items-center rotate-[-8deg] rounded-md bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70 border border-white/15">
                      Sold out
                    </span>
                  ) : (
                    <a
                      href={s.ticket}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-black hover:bg-[#FB823E] transition"
                    >
                      Tickets <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>



          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
        </div>
        
      </div>
                {/* Marquee bar like the screenshot */}
          <div className="overflow-hidden border-t border-white/10 bg-green-400">
            <div className="whitespace-nowrap py-4 text-sm font-extrabold uppercase tracking-[0.35em] text-black">
              <span className="inline-block animate-[marquee_14s_linear_infinite]">
                BUY TICKETS ✦ BUY TICKETS ✦ BUY TICKETS ✦ BUY TICKETS ✦ BUY
                TICKETS ✦ BUY TICKETS ✦ BUY TICKETS ✦ BUY TICKETS ✦
              </span>
            </div>
          </div>
    </section>
  );
}

export default UpcomingShows;
