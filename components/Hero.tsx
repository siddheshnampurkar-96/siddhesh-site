'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-[var(--bg-dark)] grain-overlay overflow-hidden"
    >
      {/* Content layer above grain */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Label above name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-dm-sans text-[var(--muted)] text-xs uppercase mb-6"
          style={{ letterSpacing: '0.25em' }}
        >
          TPM · Amazon Robotics · Seattle
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant font-light text-[var(--text-light)] leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 9vw, 9rem)' }}
        >
          Siddhesh Nampurkar
        </motion.h1>

        {/* Positioning line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-dm-sans font-light text-[var(--muted)] text-lg max-w-xl"
          style={{ letterSpacing: '0.01em' }}
        >
          Closing the gap between what&apos;s possible and what&apos;s deployed.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ delay: scrolled ? 0 : 1.2, duration: 0.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
