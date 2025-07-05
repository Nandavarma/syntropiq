"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="relative z-30">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 flex justify-between items-center px-6 py-4 bg-[#0f172a]/50 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_0_0.3rem_#d946ef]">
          Syntropiq
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-white">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/learn" className="hover:text-gray-400 transition">
            Learn
          </Link>
          <Link href="/practice" className="hover:text-gray-400 transition">
            Practice
          </Link>
          <Link href="/login" className="hover:text-gray-400 transition">
            Login
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="/login"
            className="text-sm text-gray-200 hover:text-white transition"
          >
            Login
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="relative z-50 flex flex-col justify-between w-6 h-5"
          >
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 z-40 bg-black/30 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-full w-[80vw] max-w-sm h-screen z-50 overflow-y-auto"
            >
              <div className="h-full p-8 bg-gradient-to-b from-[#3a0d58]/60 via-[#1c0c3a]/50 to-[#0f172a]/60 backdrop-blur-2xl border-l border-white/10 shadow-xl rounded-l-3xl flex flex-col">
                <nav className="flex flex-col space-y-6 pt-10 text-white text-lg font-medium">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Home
                  </Link>
                  <Link
                    href="/learn"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Learn
                  </Link>
                  <Link
                    href="/practice"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Practice
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
