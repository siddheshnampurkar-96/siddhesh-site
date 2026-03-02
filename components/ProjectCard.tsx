'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const isDark = !isEven // even index → light bg, odd index → dark bg

  const bg = isDark ? 'var(--bg-dark)' : 'var(--bg-light)'
  const tagColor = isDark ? 'var(--accent)' : 'var(--muted)'
  const titleColor = isDark ? 'var(--text-light)' : 'var(--text-primary)'
  const bodyOpacity = isDark ? 'rgba(247,244,239,0.65)' : 'rgba(26,26,26,0.65)'

  // image-left, text-right on even; text-left, image-right on odd
  const imageFirst = isEven

  return (
    <article
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col gap-10 md:gap-12 md:items-center ${
            imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <motion.div
            className="w-full md:w-[45%] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 md:w-[50%] flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.15,
            }}
          >
            {/* Category tag */}
            <p
              className="font-dm-sans text-xs uppercase mb-4"
              style={{ letterSpacing: '0.15em', color: tagColor }}
            >
              {project.category}
            </p>

            {/* Title */}
            <h2
              className="font-cormorant font-normal mb-2 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: titleColor }}
            >
              {project.title}
            </h2>

            {/* Subtitle */}
            <p
              className="font-dm-sans font-light text-sm mb-6"
              style={{ color: bodyOpacity, letterSpacing: '0.02em' }}
            >
              {project.subtitle}
            </p>

            {/* Tech overview */}
            <p
              className="font-dm-sans font-light text-base leading-relaxed mb-6"
              style={{ color: bodyOpacity }}
            >
              {project.techOverview}
            </p>

            {/* My Role */}
            <p
              className="font-dm-sans text-xs uppercase mb-3"
              style={{ letterSpacing: '0.15em', color: 'var(--accent)' }}
            >
              My Role
            </p>
            <p
              className="font-dm-sans font-light text-base leading-relaxed mb-8"
              style={{ color: bodyOpacity }}
            >
              {project.myRole}
            </p>

            {/* Read more link */}
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-sm text-[var(--accent)] hover:underline inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm w-fit"
              aria-label={`Read more about ${project.title} on ${project.externalLinkLabel}`}
            >
              Read more →
            </a>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
