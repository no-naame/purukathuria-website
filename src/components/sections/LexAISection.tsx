import { TerminalSquare, BarChart2, GraduationCap } from "lucide-react";

export function LexAISection() {
  return (
    <section
      id="lex"
      className="relative rounded-[3rem] overflow-hidden mx-6 md:mx-12 my-24 bg-stone-900"
    >
      {/* Gradient glow in top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 px-8 py-24 md:px-20 md:py-28 text-center">
        {/* Badge - subtle */}
        <span className="inline-block py-2 px-5 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold uppercase tracking-[0.25em] text-stone-300 mb-10 backdrop-blur-sm">
          AI Seekhega India
        </span>

        {/* Main heading - large */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif italic text-white mb-8 tracking-tight">
          Lex AI Labs
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-white font-medium mb-4">
            India needs 1M AI engineers.
          </p>
          <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed">
            We're building the infrastructure to train them.
            <br />
            Not theory. Not certificates. Real systems. Real code. Real impact.
          </p>
        </div>

        {/* 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mb-16">
          {/* Engineers card */}
          <div className="bg-stone-800/80 border border-stone-700/50 p-8 rounded-2xl hover:bg-stone-800 transition-colors">
            <div className="text-orange-400 mb-6">
              <TerminalSquare className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Engineers</h4>
            <p className="text-sm text-stone-400 leading-relaxed">
              From SDE to ML Engineer in 12 weeks.
            </p>
          </div>

          {/* Leaders card */}
          <div className="bg-stone-800/80 border border-stone-700/50 p-8 rounded-2xl hover:bg-stone-800 transition-colors">
            <div className="text-emerald-400 mb-6">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Leaders</h4>
            <p className="text-sm text-stone-400 leading-relaxed">
              AI strategy for CTOs who ship.
            </p>
          </div>

          {/* Students card */}
          <div className="bg-stone-800/80 border border-stone-700/50 p-8 rounded-2xl hover:bg-stone-800 transition-colors">
            <div className="text-orange-400 mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Students</h4>
            <p className="text-sm text-stone-400 leading-relaxed">
              University → Industry in one cohort.
            </p>
          </div>
        </div>

        {/* Button */}
        <a
          href="https://aiseekhegaindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-sm hover:bg-stone-100 transition-colors shadow-lg"
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
}
