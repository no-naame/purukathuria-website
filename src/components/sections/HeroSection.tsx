import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { MarqueeBar } from "@/components/layout/MarqueeBar";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-[#fafafa]"
      >
        {/* Background Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0" />

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-100 shadow-sm animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-stone-600 uppercase tracking-wider">
                Building Lex AI Labs
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] font-serif font-medium text-stone-900 tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Engineer <span className="text-orange-600 font-light">→</span> Educator{" "}
              <span className="text-orange-600 font-light">→</span>{" "}
              <span className="italic">Builder.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-stone-600 max-w-xl font-light leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              I teach machines to learn. Then I teach humans to build them.
              <br />
              <span className="text-stone-500">
                Founder,{" "}
                <strong className="text-stone-900 font-medium border-b-2 border-orange-200">
                  Lex AI Labs
                </strong>
                . Ex-Google. Ex-MathWorks.
              </span>
            </p>

            {/* Quote Card */}
            <div
              className="bg-white border border-stone-100 rounded-2xl p-6 max-w-md shadow-sm animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <p className="text-stone-700 font-serif italic text-lg leading-relaxed">
                "The simplest models explain the deepest ideas."
              </p>
            </div>

            {/* CTA and Social Links */}
            <div
              className="flex flex-wrap items-center gap-6 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#writings"
                className="group flex items-center gap-3 text-stone-900 font-medium hover:text-orange-600 transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center bg-white group-hover:border-orange-200 group-hover:bg-orange-50 transition-all">
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </span>
                See the work
              </a>

              <div className="h-px w-12 bg-stone-200" />

              <div className="flex gap-4 text-stone-400">
                <a
                  href="https://github.com/purukathuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/purukathuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/purukathuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div
            className="lg:col-span-5 relative animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto group">
              {/* Decorative Corners */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-orange-200 rounded-tr-[3rem]" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-stone-200 rounded-bl-[3rem]" />

              {/* Image Container */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-stone-200 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <img
                  src="/Puru_Image.png"
                  alt="Puru Kathuria"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/90 to-transparent pt-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white font-serif text-2xl italic">
                        Puru K.
                      </p>
                      <p className="text-stone-300 text-xs uppercase tracking-widest font-mono mt-1">
                        MTech ML/AI • IIIT Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Bar */}
      <MarqueeBar />
    </>
  );
}
