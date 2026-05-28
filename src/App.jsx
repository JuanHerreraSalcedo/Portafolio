import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Metrics from './components/Metrics'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#0A0A0F] text-[#F1F5F9] font-['Outfit',sans-serif] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Metrics />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
