'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 80)

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="nav"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-[var(--bg-dark)]/95 backdrop-blur-md border-b border-[var(--border-dark)]'
              : 'bg-transparent'
          }`}
        >
          {/* Left: Logo + Name */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <Logo size={28} color="var(--accent)" />
            <span
              className="font-cormorant text-[var(--text-light)] text-base font-normal hidden sm:block"
              style={{ letterSpacing: '0.02em' }}
            >
              Siddhesh Nampurkar
            </span>
          </a>

          {/* Right: Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'About', href: '#bio' },
              { label: 'Work', href: '#work' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm-sans text-[var(--text-light)] opacity-70 hover:opacity-100 hover:text-[var(--accent)] text-xs uppercase tracking-widest transition-all duration-200 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
