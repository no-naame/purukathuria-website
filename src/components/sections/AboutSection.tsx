const experiences = [
  {
    id: 1,
    role: "Founder",
    company: "Lex AI Labs",
    description:
      "Currently building the future of AI education. Helping students across India understand and leverage artificial intelligence.",
    isFirst: true,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Google",
    description:
      "Worked on large scale distributed systems. Learned what it takes to build products for billions of users.",
    isFirst: false,
  },
  {
    id: 3,
    role: "Engineer",
    company: "MathWorks",
    description:
      "Developed core algorithms for MATLAB. Deepened understanding of computational mathematics.",
    isFirst: false,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-44 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Left - Content */}
          <div>
            {/* Label */}
            <span className="text-orange-500 font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              The Path
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-stone-900 mb-12 leading-tight">
              Bridging the gap between{" "}
              <span className="italic text-stone-400">Code</span>{" "}
              <span className="text-stone-300">&</span>{" "}
              <span className="italic text-stone-400">Classroom</span>
            </h2>

            {/* Timeline */}
            <div className="space-y-10 border-l-2 border-stone-200 pl-10 relative">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Dot */}
                  <span
                    className={`absolute -left-[45px] top-1.5 w-5 h-5 rounded-full border-4 border-[#fafafa] ${
                      exp.isFirst ? "bg-orange-500" : "bg-stone-300"
                    }`}
                  />
                  <h4 className="text-stone-900 text-xl md:text-2xl font-semibold mb-3">
                    {exp.role} @ {exp.company}
                  </h4>
                  <p className="text-stone-500 text-base leading-relaxed max-w-lg">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-16">
              <div className="inline-block bg-stone-100 px-8 py-4 rounded-xl">
                <p className="text-stone-900 font-serif italic text-2xl">Puru K.</p>
              </div>
            </div>
          </div>

          {/* Right - Polaroid Images */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Top left polaroid */}
            <div className="absolute top-8 left-8 z-10 w-72 p-4 bg-white rotate-[-3deg] shadow-2xl rounded-sm border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-52 object-cover grayscale contrast-125 mb-4"
                alt="Teaching"
              />
              <p className="text-stone-600 font-serif text-base italic text-center">
                First workshop in Delhi
              </p>
            </div>

            {/* Bottom right polaroid */}
            <div className="absolute bottom-12 right-8 z-20 w-64 p-4 bg-white rotate-[4deg] shadow-2xl rounded-sm border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-44 object-cover grayscale contrast-125 mb-4"
                alt="Coding"
              />
              <p className="text-stone-600 font-serif text-base italic text-center">
                Hackathon nights 💻
              </p>
            </div>

            {/* Yellow sticky note - centered */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-56 bg-yellow-300 p-5 shadow-xl rotate-[-6deg]">
              <p className="text-stone-900 text-lg leading-snug font-serif">
                "ALGORITHMS are going to power products and marketing of tomorrow."
              </p>
            </div>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden mt-8">
            {/* Yellow sticky note */}
            <div className="bg-yellow-300 p-5 shadow-lg max-w-sm mx-auto transform rotate-2 mb-8">
              <p className="text-stone-900 text-lg leading-snug font-serif">
                "ALGORITHMS are going to power products and marketing of tomorrow."
              </p>
            </div>

            {/* Single polaroid for mobile */}
            <div className="bg-white p-4 shadow-xl rounded-sm max-w-sm mx-auto transform -rotate-2 border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-56 object-cover grayscale contrast-125 mb-4"
                alt="Teaching"
              />
              <p className="text-stone-600 font-serif text-base italic text-center">
                First workshop in Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
