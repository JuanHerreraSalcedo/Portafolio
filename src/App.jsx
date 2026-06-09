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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        pointerEvents: 'none',
        opacity: 0.15,
        mixBlendMode: 'overlay',
        width: '110%',
        height: '110%',
      }}
    >
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <GrainOverlay />
      <div className="font-inter overflow-x-hidden" style={{ background: '#000', color: '#fff' }}>
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
