import Logo from './Logo'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--bg-dark)] py-16 px-6 flex flex-col items-center gap-6"
    >
      <Logo size={32} color="var(--accent)" />

      <p
        className="font-cormorant font-light text-[var(--text-light)] text-lg"
        style={{ opacity: 0.8, letterSpacing: '0.02em' }}
      >
        Siddhesh Nampurkar
      </p>

      {/* Icon row */}
      <div className="flex items-center gap-6">
        {/* Email */}
        <a
          href="mailto:siddheshnampurkar@gmail.com"
          aria-label="Send email to Siddhesh Nampurkar"
          className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <line x1="8" y1="11" x2="8" y2="17" />
            <line x1="8" y1="8" x2="8" y2="8.5" />
            <path d="M12 11 C12 11 12 8 15 8 C18 8 18 11 18 11 L18 17" />
          </svg>
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label="Download Siddhesh Nampurkar's resume"
          className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="12" x2="12" y2="18" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-[var(--border-dark)]" aria-hidden="true" />

      {/* Copyright */}
      <p
        className="font-dm-sans font-light text-[var(--muted)] text-xs"
        style={{ letterSpacing: '0.05em' }}
      >
        © 2026 Siddhesh Nampurkar
      </p>

      {/* Tagline */}
      <p
        className="font-dm-sans font-light text-[var(--muted)] text-xs italic"
        style={{ opacity: 0.5 }}
      >
        Built to show, not just tell.
      </p>
    </footer>
  )
}
