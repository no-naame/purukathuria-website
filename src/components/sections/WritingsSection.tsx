import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Mental Models for Learning CNNs",
    category: "Deep Learning",
    readTime: "8 min read",
    date: "Jan 2025",
  },
  {
    title: "Why Attention Changed Everything",
    category: "Transformers",
    readTime: "6 min read",
    date: "Dec 2024",
  },
  {
    title: "From Logistic Regression to Transformers",
    category: "ML Fundamentals",
    readTime: "12 min read",
    date: "Nov 2024",
  },
  {
    title: "How Netflix Decides What You Watch Next",
    category: "Recommender Systems",
    readTime: "5 min read",
    date: "Oct 2024",
  },
];

export function WritingsSection() {
  return (
    <section id="writings" className="py-28 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left - Header */}
        <div className="lg:col-span-4">
          <span className="font-mono text-orange-600 text-xs font-bold uppercase tracking-widest mb-4 block">
            Thinking in Public
          </span>
          <h2 className="text-5xl font-serif font-medium text-stone-900 mb-8">
            Ideas Worth <br />
            Building.
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed">
            Essays on deep learning, system architecture, and making complex
            concepts simple. Not just techniques—they are lenses.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold border-b border-stone-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
          >
            View Full Archive <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right - Article List */}
        <div className="lg:col-span-8 space-y-2 relative">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group block relative py-8 border-b border-stone-200 hover:border-stone-900 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded border border-stone-200 text-[10px] font-mono uppercase text-stone-500 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors">
                      {article.category}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-stone-900 group-hover:translate-x-4 transition-transform duration-300">
                    {article.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-stone-400">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
