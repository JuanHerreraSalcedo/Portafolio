import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Static data — only visual properties, labels come from translations
const metricsData = [
  { value: 3000, suffix: '+', gradient: 'from-indigo-500 to-violet-600', glow: 'hover:shadow-indigo-500/15' },
  { value: 6,    suffix: '+', gradient: 'from-violet-500 to-purple-600', glow: 'hover:shadow-violet-500/15' },
  { value: 5,    suffix: '+', gradient: 'from-indigo-400 to-cyan-500',   glow: 'hover:shadow-cyan-500/15'   },
  { value: 30,   suffix: '%', gradient: 'from-orange-400 to-[#FF6B35]',  glow: 'hover:shadow-orange-500/15' },
]

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = Math.ceil(value / Math.round(2000 / 16))
    const timer = setInterval(() => {
      current += step
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(current)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <>{count.toLocaleString()}{suffix}</>
}

export default function Metrics() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/10 via-transparent to-violet-950/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.metrics.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.metrics.title}</h2>
          <p className="text-[#94A3B8] mt-4 text-base max-w-md mx-auto">{t.metrics.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metricsData.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-[#1A1A2E] border border-white/5 text-center overflow-hidden cursor-default transition-all duration-300 hover:shadow-2xl ${metric.glow} hover:border-white/10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

              <div className={`text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent leading-none`}>
                <Counter value={metric.value} suffix={metric.suffix} inView={isInView} />
              </div>

              <p className="text-[#94A3B8] text-sm sm:text-base font-medium leading-snug">
                {t.metrics.items[i].label}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
