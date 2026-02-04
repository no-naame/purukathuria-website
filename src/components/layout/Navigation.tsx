"use client";

import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Library", href: "#writings" },
  { label: "Lab", href: "#lex" },
  { label: "Profile", href: "#about" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center">
      {/* Logo */}
      <a
        href="#"
        className="text-xl md:text-2xl font-serif font-bold tracking-tight text-stone-900 group"
      >
        Puru<span className="text-orange-600">.</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200 shadow-sm transition-all hover:shadow-md hover:border-stone-300">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-5 py-2 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#connect"
          className="ml-1 px-5 py-2 rounded-full text-sm font-medium bg-stone-900 text-white hover:bg-orange-600 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-stone-900 bg-white rounded-full border border-stone-200">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
