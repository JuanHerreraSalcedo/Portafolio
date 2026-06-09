import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const bioText = {
    es: 'Desarrollador Frontend y Especialista en Automatización apasionado por construir interfaces limpias y flujos de trabajo inteligentes. Desarrollo experiencias web modernas con HTML, CSS, JavaScript, Angular y React — y automatizo procesos complejos usando Make.com, n8n e integraciones REST API. He construido herramientas en producción como una Blueprint API y un MCP Server que conecta flujos de IA con clientes como Claude Desktop y Cursor.',
    en: "Frontend Developer and Automation Specialist passionate about building clean interfaces and intelligent workflows. I craft modern web experiences using HTML, CSS, JavaScript, Angular, and React — and automate complex business processes using Make.com, n8n, and REST API integrations. I've built production-grade tools including a Blueprint API and an MCP Server that connects AI workflows to clients like Claude Desktop and Cursor.",
  }

  return (
    <section
      id="about"
      style={{ background: '#000', color: '#fff', padding: '6rem 1.5rem' }}
      ref={ref}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="!grid-cols-1 md:!grid-cols-2"
      >
        {/* Left — year */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: '8vw',
              color: '#888',
              lineHeight: 1,
              display: 'block',
            }}
          >
            2026
          </span>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '1.25rem',
              color: '#e5e5e5',
              maxWidth: '560px',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {bioText[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
