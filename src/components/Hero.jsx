// Hero.jsx — Full-screen video hero with entrance animations
// Displays the main headline, subtitle, and CTA buttons over a background video.
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { heroContent, personalInfo } from '../data/portfolioData'
// Import via Vite so the file gets hashed and bundled correctly
import heroVideo from '../assets/hero/hero.mp4'

// Small decorative arrow that points toward the CTA buttons
function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 animate-bounce"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}

export default function Hero() {
  const videoRef = useRef(null)

  // Staggered entrance: each child animates in after the previous one
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* ── Background video ─────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Dark gradient overlay — improves readability ──────────── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]/90 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Animated red accent circle (decorative) ───────────────── */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Main content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Greeting pill */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
          <span className="inline-block bg-[#ff2a2a]/15 border border-[#ff2a2a]/30 text-[#ff2a2a] text-sm font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
            {heroContent.greeting}
          </span>
        </motion.div>

        {/* Main h1 — the ONLY h1 on the page */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter text-white mb-4"
        >
          {/* Static first line */}
          <span className="block">{personalInfo.title}</span>
          {/* Red accent highlight */}
          <span className="block text-[#ff2a2a]">{heroContent.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-white/60 text-base md:text-lg leading-relaxed mt-6 mb-10"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — View My Work */}
          <a
            href={heroContent.ctaPrimary.href}
            className="group inline-flex items-center gap-2 bg-[#ff2a2a] hover:bg-[#e02020] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,42,42,0.4)]"
          >
            {heroContent.ctaPrimary.text}
            <ArrowDown />
          </a>

          {/* Secondary — Contact Me */}
          <a
            href={heroContent.ctaSecondary.href}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            {heroContent.ctaSecondary.text}
          </a>

          {/* Resume button — only shown when ctaResume is not null */}
          {heroContent.ctaResume && (
            <a
              href={heroContent.ctaResume.href}
              download
              className="inline-flex items-center gap-2 bg-transparent border border-[#ff2a2a]/50 hover:border-[#ff2a2a] text-[#ff2a2a] font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              {heroContent.ctaResume.text}
            </a>
          )}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          variants={item}
          className="mt-16 text-white/30 text-xs uppercase tracking-[0.3em] font-mono"
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* ── Bottom fade to blend into the next section ───────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
