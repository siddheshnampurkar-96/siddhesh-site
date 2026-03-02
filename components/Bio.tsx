'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Bio() {
  return (
    <section
      id="bio"
      className="bg-[var(--bg-light)] py-28 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-16 md:gap-12">
          {/* LEFT: Text */}
          <motion.div
            className="flex-1 md:w-[55%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="font-dm-sans text-[var(--muted)] text-xs uppercase mb-8"
              style={{ letterSpacing: '0.2em' }}
            >
              About
            </motion.p>

            <motion.p variants={fadeUp} className="font-dm-sans font-light text-[var(--text-primary)] text-base leading-relaxed mb-6">
              Robots and hardware don&apos;t deploy themselves. I&apos;m the person who closes the gap between what works in a lab and what works at scale — safely, reliably, and fast.
            </motion.p>

            <motion.p variants={fadeUp} className="font-dm-sans font-light text-[var(--text-primary)] text-base leading-relaxed mb-6">
              At Amazon Robotics, that means leading the development and deployment of next-gen robots and automation technology across global fulfillment networks, reshaping how warehouses and supply chains operate. Before that, it meant automating and commissioning EV battery lines for the world&apos;s largest automotive manufacturers.
            </motion.p>

            <motion.p variants={fadeUp} className="font-dm-sans font-light text-[var(--text-primary)] text-base leading-relaxed mb-10">
              The work changes. The problem doesn&apos;t: take what&apos;s possible and make it real.
            </motion.p>

            {/* Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              {/* Email */}
              <a
                href="mailto:siddheshnampurkar@gmail.com"
                aria-label="Send email to Siddhesh Nampurkar"
                className="text-[var(--text-primary)] opacity-50 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,6 12,13 22,6" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/siddheshnampurkar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Siddhesh Nampurkar on LinkedIn"
                className="text-[var(--text-primary)] opacity-50 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <line x1="8" y1="11" x2="8" y2="17" />
                  <line x1="8" y1="8" x2="8" y2="8.5" />
                  <path d="M12 11 C12 11 12 8 15 8 C18 8 18 11 18 11 L18 17" />
                </svg>
              </a>

              {/* Resume download */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download Siddhesh Nampurkar's resume"
                className="text-[var(--text-primary)] opacity-50 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="12" x2="12" y2="18" />
                  <polyline points="9 15 12 18 15 15" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Headshot */}
          <motion.div
            className="md:w-[40%] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/5', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }}
            >
              <Image
                src="/images/headshot.jpg"
                alt="Siddhesh Nampurkar — Technical Program Manager at Amazon Robotics"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
