import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax effect for the giant background "Contact" word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    // Validation check
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback to mailto link when EmailJS credentials are not populated in .env
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`

      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // EmailJS configured send
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('EmailJS submission error:', error)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax Giant Background Typography */}
      <motion.div
        style={{ y }}
        className="absolute top-12 left-0 w-full pointer-events-none z-0 select-none text-white/5 overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top whitespace-nowrap"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red Submission Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16 rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl relative z-10"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider transition-colors"
            >
              DM on Instagram
            </a>
          ) : (
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-wider">
              Open for Opportunities
            </span>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs Column */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Textarea Column */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or opportunity... *"
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px]"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Notes, and Submit Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 max-w-xl">
              {/* Permission Checkbox */}
              <label className="flex items-start space-x-3 text-xs text-white/85 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 rounded border-white/40 text-black focus:ring-0 cursor-pointer"
                />
                <span>
                  I agree to allow my submitted details to be used for responding to this inquiry.
                </span>
              </label>

              {/* Informational Note */}
              <p className="text-xs text-white/70">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>

              {/* Urgent Direct Email */}
              <p className="text-xs text-white/70">
                Urgent? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline text-white font-semibold hover:text-white/85 transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Dynamic Status Submit Button */}
            <div>
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white font-bold text-sm flex items-center space-x-3 cursor-wait shadow-inner"
                >
                  <svg
                    className="animate-spin w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-4 rounded-full bg-red-950 border border-red-800 text-red-200 font-bold text-sm shadow-lg hover:bg-red-900 transition-colors"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full border border-white text-white font-bold text-sm transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-flex items-center space-x-3 cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
