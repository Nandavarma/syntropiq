"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white scroll-smooth font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold max-w-3xl text-white drop-shadow-[0_0_0.75rem_#c084fc]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          The best way to learn is the one tailored just for you.
        </motion.h1>

        <motion.div
          className="mt-10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <a
            href="/login"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition shadow-lg hover:shadow-[0_0_1rem_#f472b6]"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-20 text-white drop-shadow-[0_0_0.5rem_#8b5cf6]">
          Why Choose Syntropiq?
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-10">
          {/* Feature 1 */}
          <motion.div
            className="flex-1 max-w-sm bg-gradient-to-br from-[#4c1d95]/40 to-[#6b21a8]/30 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:scale-[1.015] hover:shadow-[0_0_1.5rem_#9333ea] transition duration-500 ease-in-out"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Curated Tutorials
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              No more endless searching. Syntropiq delivers custom-crafted
              tutorials based on your skill level, goals, and quiz performance.
              Each tutorial is short, sharp, and sequenced for retention — not
              just reading.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex-1 max-w-sm bg-gradient-to-br from-[#1e3a8a]/40 to-[#3b82f6]/30 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:scale-[1.015] hover:shadow-[0_0_1.5rem_#3b82f6] transition duration-500 ease-in-out"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Adaptive Quizzes
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Quizzes evolve with you. Whether you&apos;re brushing up or diving
              deep, questions adjust to your pace. Track your strengths, spot
              weaknesses, and unlock mastery one topic at a time — all
              interactively.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex-1 max-w-sm bg-gradient-to-br from-[#0f766e]/40 to-[#0e7490]/30 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:scale-[1.015] hover:shadow-[0_0_1.5rem_#14b8a6] transition duration-500 ease-in-out"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Smart Dashboard
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your learning journey visualized. Real-time tracking, goal-setting
              tools, progress heatmaps, and next-step recommendations — all in
              one place. A dashboard that doesn&apos;t just show numbers, but
              tells your learning story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
