import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Manifesto from './components/Manifesto'
import About from './components/About'
import TechStack from './components/TechStack'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function GrainOverlay() {
  return (
    <div
      className="grain-anim"
      style={{ position: 'fixed', inset: 0, zIndex: 999, pointerEvents: 'none', opacity: 0.15, mixBlendMode: 'overlay', width: '110%', height: '110%' }}
    >
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}

function CustomCursor() {
  const prefersReduced = useReducedMotion()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const raf = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (prefersReduced) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovered(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovered(false)
    }

    const loop = () => {
      const ease = 0.18
      current.current.x += (target.current.x - current.current.x) * ease
      current.current.y += (target.current.y - current.current.y) * ease
      setPos({ x: current.current.x, y: current.current.y })
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  const size = hovered ? 40 : 10

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#fff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.25s ease, height 0.25s ease',
      }}
    />
  )
}

function App() {
  return (
    <LanguageProvider>
      <GrainOverlay />
      <CustomCursor />
      <div className="font-inter overflow-x-hidden" style={{ background: '#000', color: '#fff', cursor: 'none' }}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Manifesto />
          <About />
          <TechStack />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
