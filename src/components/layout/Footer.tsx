export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-16 px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Signature Quote */}
        <div className="text-center mb-12">
          <p className="text-stone-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
            "The best way to master a technical concept is to teach it to someone with zero context."
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-stone-100">
          <p className="text-stone-400 font-mono text-xs uppercase tracking-widest">
            &copy; 2025 Puru Kathuria. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-stone-400 hover:text-stone-900 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-stone-900 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
