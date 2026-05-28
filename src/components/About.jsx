import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
  const { t } = useLanguage()
  const [imgError, setImgError] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.about.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.about.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Bio text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.15 }}
            className="space-y-5 order-2 lg:order-1"
          >
            {/* Paragraph 1 */}
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {t.about.bio1pre}{' '}
              <span className="text-indigo-400 font-semibold">{t.about.bio1role1}</span>{' '}
              {t.about.bio1and}{' '}
              <span className="text-indigo-400 font-semibold">{t.about.bio1role2}</span>{' '}
              {t.about.bio1rest}
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {t.about.bio2pre}{' '}
              <span className="text-[#FF6B35] font-semibold">Groundwork/SEOMarketing</span>
              {t.about.bio2cont}{' '}
              <span className="text-[#F1F5F9] font-bold">{t.about.bio2leads}</span>{' '}
              {t.about.bio2for}{' '}
              <span className="text-[#F1F5F9] font-bold">{t.about.bio2clients}</span>
              {t.about.bio2end}
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {t.about.bio3pre}{' '}
              <span className="text-indigo-400 font-semibold">{t.about.bio3ai}</span>{' '}
              {t.about.bio3end}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 pt-3">
              {t.about.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="px-3.5 py-1.5 text-sm rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 blur-2xl scale-110 -z-10" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-700 shadow-2xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0D0D18]">
                  {imgError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F]">
                      <span className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                        JH
                      </span>
                    </div>
                  ) : (
                    <img
                      src={import.meta.env.BASE_URL + 'profile.png'}
                      alt="Juan Camilo Herrera Salcedo"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>
              </div>

              {/* Floating badge — open to work */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-[#111118] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-sm"
              >
                <div className="text-indigo-400 font-bold text-sm">{t.about.openToWork}</div>
                <div className="text-[#94A3B8] text-xs mt-0.5">{t.about.specialty}</div>
              </motion.div>

              {/* Floating badge — company */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -left-5 bg-[#111118] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-sm"
              >
                <div className="text-[#FF6B35] font-bold text-sm">Groundwork</div>
                <div className="text-[#94A3B8] text-xs mt-0.5">SEOMarketing</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
