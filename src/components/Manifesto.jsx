import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Manifesto() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReduced = useReducedMotion()

  // Split on \n so each line animates as a block
  const lines = t.manifesto.quote.split('\n')

  return (
    <section
      ref={ref}
      style={{
        background: '#09090b',
        padding: '6rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
            color: '#e5e5e5',
            lineHeight: 1.3,
            margin: '0 0 3rem',
            letterSpacing: '-0.02em',
            whiteSpace: 'pre-line',
          }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </motion.p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 320 } : { width: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1.2, delay: prefersReduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '1px', background: 'rgba(255,255,255,0.3)', maxWidth: '320px' }}
          />
        </div>
      </div>
    </section>
  )
}
