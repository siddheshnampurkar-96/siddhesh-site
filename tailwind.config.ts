import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'var(--bg-dark)',
        'bg-light': 'var(--bg-light)',
        'text-primary': 'var(--text-primary)',
        'text-light': 'var(--text-light)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        'border-dark': 'var(--border-dark)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
