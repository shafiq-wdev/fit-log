"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-t border-lime-400/80 bg-[#0b0c0f] text-white">
      <div className="mx-auto flex h-[64px] w-full max-w-[1400px] items-center justify-between px-5 md:px-8">

        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FITLOG"
              width={25}
              height={25}
              className="object-contain"
            />

            <span className="font-oswald text-[15px] font-bold tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        {/* ================= DESKTOP CENTER ================= */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">

          <Link
            href="/workouts"
            className="rounded-full bg-[#172000] px-4 py-2 text-[11px] font-medium text-[#b7ff00] transition duration-200 hover:bg-[#243000]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-[11px] font-medium text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            My Plan
          </Link>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Plan */}
          <Link
            href="/plan"
            className="flex items-center gap-2 text-[11px] text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/saved"
            className="flex items-center gap-2 text-[11px] text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[17px] min-w-[17px] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-1 text-[9px] text-gray-400">
              0
            </span>
          </Link>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="border-t border-white/5 bg-[#0b0c0f] px-5 py-4 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/workouts"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#172000] px-4 py-3 text-sm font-medium text-[#b7ff00]"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              My Plan
            </Link>

            <Link
              href="/plan"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[10px] font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/saved"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 text-[10px] text-gray-400">
                0
              </span>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;