import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const frontendSkills = [
  { name: 'HTML / CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'WordPress', level: 85 },
  { name: 'Angular / TypeScript', level: 75 },
  { name: 'React', level: 65 },
]

const automationSkills = [
  { name: 'Make.com', level: 80 },
  { name: 'API Integrations', level: 70 },
  { name: 'Workflow Architecture', level: 65 },
  { name: 'n8n', level: 55 },
]

function SkillBar({ skill, index, inView, gradient }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[#F1F5F9] font-medium text-sm">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
          className="text-[#94A3B8] text-sm font-semibold tabular-nums"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2 + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`h-full rounded-full ${gradient} relative`}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.skills.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.skills.title}</h2>
          <p className="text-[#94A3B8] mt-4 text-base max-w-md mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 rounded-2xl bg-[#1A1A2E] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                <span className="text-indigo-400 text-lg font-black">{'</>'}</span>
              </div>
              <div>
                <h3 className="font-bold text-[#F1F5F9]">{t.skills.frontend}</h3>
                <p className="text-xs text-[#94A3B8] mt-0.5">{t.skills.frontendSub}</p>
              </div>
            </div>

            <div className="space-y-6">
              {frontendSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={i}
                  inView={isInView}
                  gradient="bg-gradient-to-r from-indigo-500 to-violet-500"
                />
              ))}
            </div>
          </motion.div>

          {/* Automation card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-8 rounded-2xl bg-[#1A1A2E] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/15 border border-[#FF6B35]/20 flex items-center justify-center">
                <span className="text-[#FF6B35] text-lg font-black">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-[#F1F5F9]">{t.skills.automation}</h3>
                <p className="text-xs text-[#94A3B8] mt-0.5">{t.skills.automationSub}</p>
              </div>
            </div>

            <div className="space-y-6">
              {automationSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={i}
                  inView={isInView}
                  gradient="bg-gradient-to-r from-[#FF6B35] to-orange-400"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
