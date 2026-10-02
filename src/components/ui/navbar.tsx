import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-neutral-900/40 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.03)] relative overflow-hidden">
        {/* Subtle amber depth line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        
        {/* Left: Logo */}
        <div className="text-white font-semibold tracking-wide text-lg relative z-10">
          Brand
        </div>

        {/* Right: Links + CTA */}
        <div className="flex items-center gap-8 relative z-10">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#" className="hover:text-amber-400 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500/40 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500/40 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500/40 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500/40 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <button className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium transition-all duration-500 hover:bg-amber-500 hover:border-amber-500 hover:text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
