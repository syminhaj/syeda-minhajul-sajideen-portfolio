// Hero.jsx — Full-screen hero with red background, profile image,
// left-aligned text, and a "PLAY REEL" button that opens a video modal.
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroContent, personalInfo } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'
import heroVideo from '../assets/hero/hero.mp4'

// ── Video Modal ───────────────────────────────────────────────────────────────
// Renders a full-screen dark overlay with the video centred inside.
// Closes on: ✕ button, clicking the backdrop, or pressing Escape.
function VideoModal({ onClose }) {
  const videoRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Auto-play when modal opens
  useEffect(() => {
    if (videoRef.current) videoRef.current.play()
  }, [])

  return (
    <motion.div
      key="video-modal"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      // Click backdrop → close
      onClick={onClose}
    >
      {/* Video wrapper — stop click propagation so clicking the video itself doesn't close */}
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* The video — controls visible, not muted so the user hears audio */}
        <video
          ref={videoRef}
          src={heroVideo}
          controls
          className="w-full rounded-xl shadow-2xl"
          style={{ maxHeight: '80vh' }}
        />
      </motion.div>
    </motion.div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = showVideo ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showVideo])

  // Reusable fade-up animation
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    },
  })

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen bg-[#ff2a2a] overflow-hidden flex flex-col"
      >
        {/* ── Profile image — centred behind everything ─────────────── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img
            src={profileImg}
            alt={`Illustrated portrait of ${personalInfo.name}`}
            className="h-full max-h-[90vh] w-auto object-contain object-center opacity-90"
            draggable="false"
          />
        </div>

        {/* ── Left gradient keeps text legible ─────────────────────── */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#ff2a2a]/95 via-[#ff2a2a]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#cc1a1a]/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* ── PLAY REEL button — positioned on the laptop lid (bottom-right) ─────── */}
        <motion.div
          className="absolute right-[8%] sm:right-[12%] md:right-[14%] lg:right-[16%] bottom-[14%] sm:bottom-[16%] md:bottom-[18%] z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Circle play button */}
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            aria-label="Play intro reel"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/60 border border-white/20 hover:bg-black/80 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Subtle pulsing ring */}
            <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-60" aria-hidden="true" />
            {/* Play triangle */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white translate-x-0.5 opacity-90 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          {/* Label */}
          <span className="text-white/80 group-hover:text-white font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold drop-shadow-sm select-none">
            Play Reel
          </span>
        </motion.div>

        {/* ── Text block — pinned to bottom-left ───────────────────── */}
        <div className="relative z-10 mt-auto px-6 md:px-14 pb-16 md:pb-20 max-w-2xl">

          {/* Name headline — the ONLY <h1> on the page */}
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white mb-2 drop-shadow-sm"
          >
            Hi, I&apos;m {personalInfo.name},
          </motion.h1>

          {/* Role — white outlined/stroked text (matches the reference style) */}
          <motion.p
            variants={fadeUp(0.35)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6"
            style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
            aria-label={heroContent.titleHighlight}
          >
            {heroContent.titleHighlight}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="show"
            className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm mb-8"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.65)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            {/* Primary — View My Work */}
            <a
              href={heroContent.ctaPrimary.href}
              className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
            >
              {heroContent.ctaPrimary.text}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>

            {/* Secondary — Contact Me */}
            <a
              href={heroContent.ctaSecondary.href}
              className="inline-flex items-center gap-2 bg-black/20 hover:bg-black/30 border border-white/40 text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume — only shown when ctaResume is set in portfolioData */}
            {heroContent.ctaResume && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </motion.div>
        </div>

        {/* ── Bottom fade into the next dark section ────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* ── Video modal — rendered outside the section via AnimatePresence ── */}
      <AnimatePresence>
        {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
      </AnimatePresence>
    </>
  )
}
