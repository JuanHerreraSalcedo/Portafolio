import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Manifesto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      style={{
        background: '#09090b',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
      }}
    >
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#e5e5e5',
            lineHeight: 1.25,
            margin: '0 0 3rem',
            letterSpacing: '-0.02em',
          }}
        >
          I don&apos;t just build interfaces —<br />
          I build the systems that power them.
        </motion.p>

        {/* Animated line */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 320 } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.3)',
              maxWidth: '320px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
