'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 7,     suffix: '+', label: 'Years of Experience'     },
  { value: 45000, suffix: '+', label: 'Robots Deployed'         },
  { value: 8,     suffix: '+', label: 'New Products Introduced' },
]

function StatItem({ value, suffix, label, delay }: {
  value: number
  suffix: string
  label: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useCountUp(value, 1800, isInView)

  const formatted = count.toLocaleString()

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3"
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`${label}: ${value}${suffix}`}
    >
      <span
        className="font-cormorant text-[var(--accent)] font-normal tabular-nums"
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
      >
        {formatted}
        <span className="ml-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{suffix}</span>
      </span>
      <span
        className="font-dm-sans text-[var(--text-light)] text-xs uppercase"
        style={{ letterSpacing: '0.2em', opacity: 0.5 }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-[var(--bg-dark)] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col md:flex-row items-center w-full md:flex-1">
              <div className="flex-1 flex justify-center">
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 200}
                />
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block w-px bg-[var(--border-dark)] self-stretch mx-4"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
