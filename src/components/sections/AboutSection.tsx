import { Rocket, Cpu } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Lex AI Labs",
    role: "Founder",
    period: "Present",
    highlight: "Building India's AI education infrastructure",
    isCurrent: true,
    icon: Rocket,
    iconBg: "bg-stone-900",
    iconColor: "text-white",
  },
  {
    id: 2,
    company: "Google",
    role: "Senior Engineer",
    period: "2022 — 2025",
    highlight: "Cloud Security & AI Agents",
    isCurrent: false,
    icon: null,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    iconText: "G",
  },
  {
    id: 3,
    company: "MathWorks",
    role: "EDG Engineer",
    period: "2019 — 2022",
    highlight: "Autonomous Systems & Signal Processing",
    isCurrent: false,
    icon: Cpu,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left - Sticky Header */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <span className="text-orange-600 text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 block">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-snug">
              Where I&apos;ve
              <br />
              worked.
            </h2>
          </div>
        </div>

        {/* Right - Experience List */}
        <div className="lg:col-span-8">
          <div className="space-y-12">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="group"
                >
                  {/* Period - Top Right on Mobile, Inline on Desktop */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-5">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl ${exp.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
                      >
                        {Icon ? (
                          <Icon className={`w-5 h-5 ${exp.iconColor}`} />
                        ) : (
                          <span className={`text-lg font-bold ${exp.iconColor}`}>
                            {exp.iconText}
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
                            {exp.role}, {exp.company}
                          </h3>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold uppercase tracking-wide">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                              Now
                            </span>
                          )}
                        </div>
                        <p className="text-stone-500 mt-1">{exp.highlight}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <span className="hidden md:block text-sm text-stone-400 pt-1 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
