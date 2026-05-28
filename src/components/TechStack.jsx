import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiWordpress,
  SiBootstrap,
  SiSass,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNpm,
  SiVscodium,
} from 'react-icons/si'
import { FiServer, FiZap, FiCode } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const frontendTech = [
  { Icon: SiHtml5, name: 'HTML', color: '#E34F26' },
  { Icon: SiCss, name: 'CSS', color: '#1572B6' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiAngular, name: 'Angular', color: '#DD0031' },
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiWordpress, name: 'WordPress', color: '#21759B' },
  { Icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { Icon: SiSass, name: 'SASS', color: '#CC6699' },
  { Icon: FiCode, name: 'Java', color: '#5382A1' },
  { Icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
  { Icon: SiGithub, name: 'GitHub', color: '#EBEBEB' },
  { Icon: SiNpm, name: 'NPM', color: '#CB3837' },
  { Icon: SiVscodium, name: 'VS Code', color: '#2F80ED' },
]

const automationBase = [
  { id: 'make', name: 'Make.com', letter: 'M', Icon: null, bg: 'from-violet-600 to-purple-800', labelColor: '#A78BFA' },
  { id: 'n8n', name: 'n8n', letter: null, Icon: FiZap, bg: 'from-orange-500 to-red-600', labelColor: '#FF6D5A' },
  { id: 'anthropic', name: 'Anthropic', letter: 'A', Icon: null, bg: 'from-indigo-600 to-violet-700', labelColor: '#818CF8' },
  { id: 'mcp', name: 'MCP Server', letter: null, Icon: FiServer, bg: 'from-slate-600 to-slate-800', labelColor: '#94A3B8' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const iconItem = {
  hidden: { opacity: 0, scale: 0.7, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function TechIcon({ Icon, name, color }) {
  return (
    <motion.div
      variants={iconItem}
      whileHover={{ scale: 1.2, y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group flex flex-col items-center gap-2.5 cursor-default"
    >
      <div className="w-14 h-14 rounded-xl bg-[#1A1A2E] border border-white/5 flex items-center justify-center transition-all duration-300">
        <Icon
          size={26}
          style={{ color, filter: 'drop-shadow(0 0 8px ' + color + '60)' }}
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      <span className="text-[#94A3B8] text-xs text-center group-hover:text-[#F1F5F9] transition-colors duration-200 leading-tight">
        {name}
      </span>
    </motion.div>
  )
}

function AutomationCard({ tech }) {
  const { name, label, letter, Icon, bg, labelColor } = tech
  return (
    <motion.div
      variants={iconItem}
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1A1A2E] border border-white/5 hover:border-white/10 cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {Icon ? (
          <Icon size={22} color="white" />
        ) : (
          <span className="text-2xl font-black text-white leading-none">{letter}</span>
        )}
      </div>
      <div className="text-center">
        <div className="font-semibold text-[#F1F5F9] text-sm">{name}</div>
        <div className="text-xs mt-1 font-medium" style={{ color: labelColor }}>{label}</div>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // Build automation cards with translated labels
  const automationTech = automationBase.map((item) => ({
    ...item,
    label: t.stack.automationLabels[item.id],
  }))

  return (
    <section id="stack" className="py-28 px-4 bg-[#111118] relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.stack.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.stack.title}</h2>
        </motion.div>

        {/* Frontend & Tools */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-widest">
              {t.stack.frontend}
            </h3>
            <span className="flex-1 h-px bg-white/5" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-wrap justify-start gap-5 sm:gap-6"
          >
            {frontendTech.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </motion.div>
        </div>

        {/* Automation & AI */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-[2px] bg-[#FF6B35] rounded-full" />
            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-widest">
              {t.stack.automation}
            </h3>
            <span className="flex-1 h-px bg-white/5" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {automationTech.map((tech) => (
              <AutomationCard key={tech.id} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
