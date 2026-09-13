import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { About } from '../components/About'
import { Achievements } from '../components/Achievements'
import { Certifications } from '../components/Certifications'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.scrollToHero) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
      navigate('.', { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
