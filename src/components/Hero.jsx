// Hero.jsx — Full-screen hero matching the red-background reference design.
// Profile image is displayed prominently; text sits bottom-left over the red bg.
import { motion } from 'framer-motion'
import { heroContent, personalInfo } from '../data/portfolioData'
// Profile image imported via Vite so it gets hashed and bundled
import profileImg from '../assets/about/profile.png'

export default function Hero() {
  // Simple fade-up variant reused on each text block
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    },
  })

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#ff2a2a] overflow-hidden flex flex-col"
    >
      {/* ── Profile image — centred, fills the vertical space ──────── */}
      {/* On mobile it sits at the top; on desktop it stays centred.   */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src={profileImg}
          alt={`Illustrated portrait of ${personalInfo.name}`}
          // object-contain keeps the full figure visible at every breakpoint
          className="h-full max-h-[90vh] w-auto object-contain object-center opacity-90"
          draggable="false"
        />
      </div>

      {/* ── Subtle left-to-right gradient so text stays readable ───── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#ff2a2a]/95 via-[#ff2a2a]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Bottom fade so text block sits on a solid-enough surface */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#cc1a1a]/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Text content — pinned to bottom-left ───────────────────── */}
      <div className="relative z-10 mt-auto px-6 md:px-14 pb-16 md:pb-20 max-w-2xl">

        {/* Greeting + name */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          // The only <h1> on the page
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white mb-2 drop-shadow-sm"
        >
          Hi, I&apos;m {personalInfo.name},
        </motion.h1>

        {/* Role — large outlined / stroked text to match the reference */}
        <motion.p
          variants={fadeUp(0.35)}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6"
          style={{
            // Text stroke: white outline on transparent fill — the reference look
            WebkitTextStroke: '2px white',
            color: 'transparent',
          }}
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
          {/* Primary */}
          <a
            href={heroContent.ctaPrimary.href}
            className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            {heroContent.ctaPrimary.text}
            {/* Down-arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>

          {/* Secondary */}
          <a
            href={heroContent.ctaSecondary.href}
            className="inline-flex items-center gap-2 bg-black/20 hover:bg-black/30 border border-white/40 text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            {heroContent.ctaSecondary.text}
          </a>

          {/* Resume — only if portfolioData provides a URL */}
          {heroContent.ctaResume && (
            <a
              href={heroContent.ctaResume.href}
              download
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              {/* Document icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          )}
        </motion.div>
      </div>

      {/* ── Bottom fade blending into the next (dark) section ──────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
