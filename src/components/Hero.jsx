import React from "react";
import SampleImage from "../assets/MainDARXX830.JPEG";

function Hero() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Frame */}
        <div className="bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-7 p-8 md:p-12 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
              <h1 className="text-[#FB823E] font-extrabold uppercase leading-[0.9] tracking-tight text-[44px] sm:text-[64px] md:text-[84px]">
                DARXX <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(251,130,62,0.55)" }}
                >830</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
                I’m all about the hustle and hard work, but I’m also not afraid to
                speak my mind and address the issues that matter. If you haven’t
                heard my music yet, you’re missing out.
              </p>

              {/* Badge + Actions */}
              <div className="mt-8 flex items-center gap-5">
                {/* Circular badge */}
                <div className="relative h-16 w-16 rounded-full border border-white/15 bg-black/30 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    830
                  </span>
                  <div className="absolute inset-0 rounded-full border border-[#FB823E]/30" />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#music"
                    className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-[#FB823E] hover:border-[#FB823E]/50 transition"
                  >
                    New Music
                  </a>
                  <a
                    href="#shows"
                    className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-[#FB823E] hover:border-[#FB823E]/50 transition"
                  >
                    Instagram Show
                  </a>
                </div>
              </div>

              {/* Divider inside text panel */}
              <div className="mt-10 h-px w-full bg-white/10" />

              <div className="mt-5 text-xs uppercase tracking-[0.35em] text-white/50">
                New single: <span className="text-white/70">“Everyday”</span>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="lg:col-span-5">
              <div className="h-[360px] w-full overflow-hidden lg:h-[600px]">
                <img
                  src={SampleImage}
                  alt="Darxx830"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

    
      </div>
         {/* Divider line */}
        <div className="mt-1 h-px w-full bg-white/10" />


    </section>
  );
}

export default Hero;
