import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

function useTypingEffect(words, resetKey, { typingSpeed = 80, deletingSpeed = 45, pauseTime = 2200 } = {}) {
  const prefersReducedMotion = useReducedMotion()
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Reset typing state when language changes
  useEffect(() => {
    setDisplayText(prefersReducedMotion ? words[0] : '')
    setWordIndex(0)
    setIsDeleting(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey])

  useEffect(() => {
    if (prefersReducedMotion) return
    const word = words[wordIndex]
    let timeout

    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? word.slice(0, displayText.length - 1)
            : word.slice(0, displayText.length + 1)
        )
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, prefersReducedMotion])

  return displayText
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    />
  )
}

export default function Hero() {
  const { lang, t } = useLanguage()
  const typedText = useTypingEffect(t.hero.roles, lang)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]" />

      {/* Ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -right-40 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-950/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
          </span>
          {t.hero.badge}
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Juan Camilo
            </span>
            <br />
            <span className="text-[#F1F5F9]">Herrera Salcedo</span>
          </h1>
        </motion.div>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-medium text-[#94A3B8] mb-12 h-12"
        >
          <span className="text-indigo-400 font-bold">›</span>
          <span className="min-w-[1ch]">{typedText}</span>
          <span className="w-[2px] h-7 bg-indigo-400 animate-pulse rounded-full" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/JuanHerreraSalcedo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 bg-[#F1F5F9] text-[#0A0A0F] font-semibold rounded-xl hover:bg-white transition-colors duration-200 shadow-lg shadow-white/10"
          >
            <FiGithub size={20} />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/juan-camilo-herrera-salcedo-aa7147258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-500/40"
          >
            <FiLinkedin size={20} />
            LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8]"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
