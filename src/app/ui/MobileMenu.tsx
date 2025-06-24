"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="relative z-60 flex flex-col justify-between w-6 h-5 md:hidden"
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

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-xl bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm z-50 md:hidden"
            >
              <div className="h-full rounded-l-3xl p-8 backdrop-blur-2xl border-l border-white/10 shadow-xl bg-gradient-to-b from-[#3a0d58]/60 via-[#1c0c3a]/50 to-[#0f172a]/60 flex flex-col justify-center">
                <nav className="flex flex-col space-y-6 pt-10 text-white text-lg font-medium">
                  <a
                    href="#"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Learn
                  </a>
                  <a
                    href="#features"
                    onClick={toggleMenu}
                    className="hover:text-pink-400 transition"
                  >
                    Practice
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
