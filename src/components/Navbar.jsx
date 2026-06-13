import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReduced = useReducedMotion()

  const navLinks = [
    { label: t.nav.about,   href: '#about'    },
    { label: t.nav.work,    href: '#projects' },
    { label: t.nav.stack,   href: '#stack'    },
    { label: t.nav.contact, href: '#contact'  },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          mixBlendMode: scrolled ? 'normal' : 'difference',
          padding: '1.5rem',
          background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#fff', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em' }}
          >
            Juan Herrera
          </button>

          <div className="hidden md:flex" style={{ gap: '2rem' }}>
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.15 }}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.125rem', letterSpacing: '-0.01em', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex' }}>
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: lang === l ? '#fff' : 'rgba(255,255,255,0.35)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0.5rem', transition: 'color 0.2s ease' }}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: prefersReduced ? 0 : 0.2 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '2rem 1.5rem', gap: '1.5rem' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: prefersReduced ? 0 : i * 0.06 }}
                onClick={() => handleNav(link.href)}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '2rem', letterSpacing: '-0.02em', color: '#e5e5e5', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
