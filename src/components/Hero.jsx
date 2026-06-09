import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', '30vh end'],
  })

  const bgScale      = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 1.27])
  const headingScale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 0.89])
  const labelOpacity = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 0])

  const dur = (t) => (prefersReduced ? 0 : t)

  return (
    <section
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', minHeight: '857px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}
    >
      {/* Layer 1 — bg radial with scroll scale */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          scale: bgScale,
          background: 'radial-gradient(ellipse at center, rgba(139,69,69,0.4) 0%, rgba(20,20,20,0.8) 60%, rgba(0,0,0,0.95) 100%)',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem', width: '100%' }}>

        {/* Layer 2 — heading with scroll shrink */}
        <motion.div
          style={{ scale: headingScale, willChange: 'transform', transformStyle: 'preserve-3d', display: 'inline-block', position: 'relative' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(1), ease: [0.16, 1, 0.3, 1], delay: dur(0.1) }}
        >
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '12vw', letterSpacing: '-0.03em', lineHeight: 0.92, color: '#e5e5e5', margin: 0 }}>
            <span style={{ fontWeight: 900, fontStyle: 'normal', display: 'block' }}>Juan Camilo</span>
            <span style={{ fontWeight: 100, fontStyle: 'italic', display: 'block' }}>Herrera</span>
          </h1>

          {/* Layer 3 — side label fades on scroll */}
          <motion.p
            style={{ position: 'absolute', left: 'calc(100% + 1rem)', top: '50%', transform: 'translateY(-50%)', opacity: labelOpacity, fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.25rem', color: '#e5e5e5', whiteSpace: 'nowrap', textAlign: 'left', lineHeight: 1.4 }}
            className="hidden lg:block"
          >
            Frontend Developer<br />&amp; Automation Specialist
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.8), delay: dur(0.6), ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '42rem', margin: '3rem auto 2rem', letterSpacing: '-0.01em', lineHeight: 1.6 }}
        >
          Building modern web experiences and intelligent workflows.{' '}
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Make.com · n8n · Claude AI · MCP Server</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.8), delay: dur(0.8), ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={prefersReduced ? {} : { opacity: 0.7 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#fff', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em', textDecoration: 'underline', textUnderlineOffset: '4px', transition: 'opacity 0.2s ease' }}
          >
            View Work ↓
          </motion.button>
          <motion.a
            whileHover={prefersReduced ? {} : { opacity: 0.7 }}
            href="https://github.com/JuanHerreraSalcedo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '-0.01em', textDecoration: 'none', transition: 'opacity 0.2s ease' }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
