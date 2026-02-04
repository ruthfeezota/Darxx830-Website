import React, { useState } from "react";

export default function ContactRap() {
  const [type, setType] = useState("Bookings");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    const to = "djharkins@gmail.com"; // change this
    const subject = `[${type}] ${form.subject || "Message from site"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nType: ${type}\n\n${form.message}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const tabs = ["Bookings", "Features", "Press", "Collabs"];

  return (
    <section id="contact" className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="bg-black">
          {/* HEADER */}
          <div className="flex items-start justify-between gap-6 p-8 md:p-12 border-b border-white/10">
            <div className="w-full">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                  Direct line
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FB823E]" />
                </span>
                <span className="hidden sm:inline">
                  Be clear. Be quick. We’ll tap back.
                </span>
              </div>

              <h2 className="mt-6 text-[46px] sm:text-[64px] md:text-[86px] font-extrabold uppercase leading-[0.9] tracking-tight">
                <span className="text-[#FB823E]">Contact</span>{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(251,130,62,0.55)" }}
                >
                  Me
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-xs sm:text-sm text-white/60 leading-relaxed">
                Bookings, features, press, collabs. Drop the details and we’ll lock it in.
              </p>

              {/* TYPE TABS (looks like a flyer label strip) */}
              <div className="mt-6 flex flex-wrap gap-2">
                {tabs.map((t) => {
                  const active = type === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={[
                        "px-4 py-2 text-[11px] uppercase tracking-[0.35em] border transition",
                        active
                          ? "bg-[#FB823E] text-black border-[#FB823E]"
                          : "bg-transparent text-white/70 border-white/15 hover:border-[#FB823E]/50 hover:text-[#FB823E]",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STAMP BADGE */}
            <div className="hidden md:block shrink-0">
              <div className="relative h-20 w-20 rounded-full border border-white/15 bg-black/30 grid place-items-center">
                <div className="absolute inset-2 rounded-full border border-[#FB823E]/35" />
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/70 text-center leading-tight">
                  DARXX<br />830
                </div>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT: FORM */}
            <div className="lg:col-span-7 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10 p-8 md:p-12">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* 2-col row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.35em] text-white/60">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your name"
                      className="mt-2 w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#FB823E]/60"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.35em] text-white/60">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@email.com"
                      className="mt-2 w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#FB823E]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Venue / date / feature request / press"
                    className="mt-2 w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#FB823E]/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="Drop the details: city, date, venue, budget, what you need."
                    className="mt-2 w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#FB823E]/60 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] hover:bg-[#FB823E] transition"
                  >
                    Send Message ↗
                  </button>

                  <span className="text-[11px] uppercase tracking-[0.35em] text-white/50">
                    Reply time: 24–48h
                  </span>
                </div>

                {/* Thin divider, like the template */}
                <div className="pt-4 border-t border-white/10 text-[11px] uppercase tracking-[0.35em] text-white/50">
                  Type selected: <span className="text-white/70">{type}</span>
                </div>
              </form>
            </div>

            {/* RIGHT: DIRECT CONTACT + “ticket” buttons */}
            <div className="lg:col-span-5 p-8 md:p-12">
              <div className="border border-white/10 bg-black/20">
                <div className="p-6 border-b border-white/10">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Direct contact
                  </div>
                  <div className="mt-3 space-y-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
                        Bookings
                      </div>
                      <a
                        href="mailto:booking@darxx830.com"
                        className="mt-1 block text-sm font-semibold text-white hover:text-[#FB823E] transition"
                      >
                        djharkins@gmail.com
                      </a>
                    </div>

                    <div className="h-px w-full bg-white/10" />

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
                        Instagram
                      </div>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-sm font-semibold text-white hover:text-[#FB823E] transition"
                      >
                        @darxx830 ↗
                      </a>
                    </div>

                    <div className="h-px w-full bg-white/10" />

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
                        Location
                      </div>
                      <div className="mt-1 text-sm text-white/70">
                        Austin, TX
                      </div>
                    </div>
                  </div>
                </div>

                {/* “Ticket style” CTA buttons */}
                <div className="p-6 space-y-3">
                  <a
                    href="mailto:booking@darxx830.com"
                    className="w-full inline-flex items-center justify-between bg-white text-black px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] hover:bg-[#FB823E] transition"
                  >
                    Email bookings <span aria-hidden>↗</span>
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-between border border-white/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80 hover:text-[#FB823E] hover:border-[#FB823E]/60 transition"
                  >
                    DM on Instagram <span aria-hidden>↗</span>
                  </a>

                  <div className="mt-4 text-xs text-white/50">
                    For bookings: date, city, venue, set length, budget.
                  </div>
                </div>
              </div>
            </div>
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
        

        <div className="h-px w-full bg-white/10" />
        
      </div>

          {/* FULL-WIDTH ORANGE TICKER BAR (rap vibe) */}
          <div className="w-full overflow-hidden border-t border-white/10 bg-green-400">
            <div className="whitespace-nowrap py-4 text-sm font-extrabold uppercase tracking-[0.35em] text-black">
              <span className="inline-block animate-[marquee_14s_linear_infinite]">
                BOOKINGS ✦ FEATURES ✦ PRESS ✦ COLLABS ✦ BOOKINGS ✦ FEATURES ✦ PRESS ✦ COLLABS ✦
              </span>
            </div>
          </div>
    </section>
  );
}
