const skills = [
  "ML & Deep Learning",
  "Distributed Systems",
  "AI Agents",
  "Teaching at Scale",
  "Zero to One Thinking",
];

export function MarqueeBar() {
  // Duplicate the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="py-6 bg-stone-900 overflow-hidden flex items-center border-y border-stone-800">
      <div className="animate-marquee whitespace-nowrap flex gap-12 text-white/90 font-mono text-sm uppercase tracking-[0.2em] font-medium">
        {duplicatedSkills.map((skill, index) => (
          <span key={index} className="flex items-center gap-12">
            {skill}
            <span className="text-orange-500">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
