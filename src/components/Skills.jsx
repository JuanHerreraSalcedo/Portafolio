import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const frontendSkills = [
  { name: 'HTML / CSS',           level: 90 },
  { name: 'JavaScript',           level: 80 },
  { name: 'WordPress',            level: 85 },
  { name: 'Angular / TypeScript', level: 75 },
  { name: 'React',                level: 65 },
]

const automationSkills = [
  { name: 'Make.com',         level: 80 },
  { name: 'API Integrations', level: 70 },
  { name: 'Workflow Design',  level: 65 },
  { name: 'n8n',              level: 55 },
]

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const barVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function SkillBar({ skill, isInView }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div variants={barVariants} style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: prefersReduced ? 0 : 0.6, duration: prefersReduced ? 0 : 0.4 }}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#e5e5e5' }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: prefersReduced ? 0 : 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#e5e5e5' }}
        />
      </div>
    </motion.div>
  )
}

function SkillGroup({ label, skills, delay, isInView }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: prefersReduced ? 0 : 0.8, delay: prefersReduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
        {label}
      </p>
      <motion.div
        variants={prefersReduced ? {} : groupVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skills.map((s) => <SkillBar key={s.name} skill={s} isInView={isInView} />)}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReduced = useReducedMotion()

  return (
    <section id="skills" style={{ background: '#09090b', color: '#fff', padding: '6rem 1.5rem' }} ref={ref}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '8vw', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: '#e5e5e5' }}>
            <span style={{ fontWeight: 900 }}>SKILLS </span>
            <span style={{ fontWeight: 100, fontStyle: 'italic' }}>&amp; Expertise</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="!grid-cols-1 md:!grid-cols-2">
          <SkillGroup label="Frontend Development" skills={frontendSkills}   delay={0.1} isInView={isInView} />
          <SkillGroup label="Automation &amp; AI"  skills={automationSkills} delay={0.2} isInView={isInView} />
        </div>
      </div>
    </section>
  )
}
