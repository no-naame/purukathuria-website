"use client";

import { Mail, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function ConnectSection() {
  return (
    <section id="connect" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="bg-white rounded-[3rem] border border-stone-200 overflow-hidden shadow-2xl shadow-stone-200/50 flex flex-col lg:flex-row">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-between bg-stone-50">
          <div>
            <h2 className="text-6xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tighter">
              Let&apos;s <br />
              Talk.
            </h2>
            <p className="text-lg text-stone-500 mb-12 max-w-md font-light">
              Open for collaborations, speaking engagements, and engineering
              challenges.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:hello@purukathuria.com"
              className="flex items-center gap-4 text-2xl font-medium hover:text-orange-600 transition-colors group"
            >
              <span className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                <Mail className="w-5 h-5" />
              </span>
              hello@purukathuria.com
            </a>

            <div className="flex gap-4 pt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-stone-200 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-stone-200 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Calendar */}
        <div className="lg:w-1/2 p-12 md:p-20 border-t lg:border-t-0 lg:border-l border-stone-200 bg-white">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-bold text-xl">Book a time</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <ChevronLeft className="w-5 h-5 text-stone-400" />
                </button>
                <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <ChevronRight className="w-5 h-5 text-stone-900" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm mb-8">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div
                  key={i}
                  className="text-stone-300 text-[10px] font-bold uppercase py-2"
                >
                  {day}
                </div>
              ))}

              {/* Empty cells for offset */}
              <span className="p-3" />
              <span className="p-3" />
              <span className="p-3" />

              {/* Calendar days */}
              {[1, 2, 3, 4].map((day) => (
                <button
                  key={day}
                  className="aspect-square flex items-center justify-center rounded-xl hover:bg-stone-100 text-stone-400"
                >
                  {day}
                </button>
              ))}
              <button className="aspect-square flex items-center justify-center rounded-xl hover:bg-stone-100 font-medium text-stone-900">
                5
              </button>
              <button className="aspect-square flex items-center justify-center rounded-xl bg-orange-600 text-white font-bold shadow-lg shadow-orange-200 ring-2 ring-offset-2 ring-orange-600">
                6
              </button>
              {[7, 8, 9, 10, 11].map((day) => (
                <button
                  key={day}
                  className="aspect-square flex items-center justify-center rounded-xl hover:bg-stone-100 font-medium text-stone-900"
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-stone-100 bg-stone-50 flex justify-between items-center cursor-pointer hover:border-orange-500 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium text-sm">
                    10:00 AM - 10:30 AM
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </div>
              <div className="p-4 rounded-xl border border-stone-100 bg-stone-50 flex justify-between items-center cursor-pointer hover:border-orange-500 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium text-sm">
                    02:00 PM - 02:30 PM
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
