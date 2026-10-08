import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto my-10 w-full max-w-7xl bg-[#0d0f12] px-6 py-5 text-white">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        {/* Logo & Icon Section */}
        <div className="flex items-center gap-2.5">
          {/* Neon Green Dumbbell SVG Icon */}
          <svg
            className="h-5 w-5 text-[#ccff00]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm12 0a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm18 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM8 11h8v2H8v-2z" />
          </svg>
          <span className="font-sans text-xl font-black uppercase tracking-tight text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright Text */}
        <p className="font-sans text-xs font-normal text-slate-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;