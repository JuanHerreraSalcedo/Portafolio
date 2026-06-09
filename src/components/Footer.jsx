import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const TITLE = 'START A PROJECT'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/JuanHerreraSalcedo',                               Icon: FaGithub   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-camilo-herrera-salcedo-aa7147258/',  Icon: FaLinkedin },
  { label: 'Email',    href: 'mailto:juank.hs5500@gmail.com',                                        Icon: null       },
]

function LetterReveal({ text, isInView, prefersReduced }) {
  const chars = text.split('')
  return (
    <span aria-label={text} style={{ display: 'inline-block' }}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: prefersReduced ? 0 : 0.5,
            delay: prefersReduced ? 0 : i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

function WavyLink({ label, href, Icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="wavy-underline-white"
      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#000', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '-0.01em', textDecoration: 'none' }}
    >
      {Icon && <Icon size={16} style={{ flexShrink: 0 }} />}
      {label}
    </a>
  )
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  return (
    <footer style={{ background: '#fafafa', color: '#000', padding: '5rem 1.5rem 3rem' }} ref={ref}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Letter-by-letter title */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })}
          style={{ display: 'block', width: '100%', fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: '12vw', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1, color: '#000', background: 'none', border: 'none', borderBottom: '1px solid #000', paddingBottom: '2rem', marginBottom: '4rem', cursor: 'pointer', textAlign: 'left', overflow: 'hidden' }}
        >
          <LetterReveal text={TITLE} isInView={isInView} prefersReduced={prefersReduced} />
        </button>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'end' }} className="!grid-cols-1 md:!grid-cols-3">

          {/* Col 1 — Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <WavyLink key={label} label={label} href={href} Icon={Icon} />
            ))}
          </motion.div>

          {/* Col 2 — Email large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 'clamp(1rem, 2.5vw, 1.875rem)', color: '#000', margin: 0, letterSpacing: '-0.02em', wordBreak: 'break-all' }}>
              juank.hs5500@gmail.com
            </p>
          </motion.div>

          {/* Col 3 — Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'right' }}
          >
            <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.25rem' }}>
              © 2026 Juan Camilo Herrera Salcedo
            </p>
            <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: 0 }}>
              Cali, Colombia
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
