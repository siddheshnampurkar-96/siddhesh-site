import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import Stats from '@/components/Stats'
import TechShowcase from '@/components/TechShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Bio />
      <Stats />
      <TechShowcase />
      <Footer />
    </main>
  )
}
