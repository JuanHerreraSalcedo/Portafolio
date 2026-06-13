import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import {
  FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaGit, FaGithub,
  FaJava, FaDocker, FaServer,
} from 'react-icons/fa6'
import {
  SiJavascript, SiTypescript, SiAngular, SiBootstrap, SiSass,
  SiFirebase, SiMake, SiN8N, SiRedis, SiMysql,
} from 'react-icons/si'
import { RiBrainLine } from 'react-icons/ri'
import { TbApi, TbWebhook } from 'react-icons/tb'

const frontendTech = [
  { name: 'HTML',       Icon: FaHtml5,      color: '#E34F26' },
  { name: 'CSS',        Icon: FaCss3Alt,    color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Angular',    Icon: SiAngular,    color: '#DD0031' },
  { name: 'React',      Icon: FaReact,      color: '#61DAFB' },
  { name: 'WordPress',  Icon: FaWordpress,  color: '#21759B' },
  { name: 'Bootstrap',  Icon: SiBootstrap,  color: '#7952B3' },
  { name: 'SASS',       Icon: SiSass,       color: '#CC6699' },
  { name: 'Firebase',   Icon: SiFirebase,   color: '#FFCA28' },
  { name: 'Git',        Icon: FaGit,        color: '#F05032' },
  { name: 'GitHub',     Icon: FaGithub,     color: '#e5e5e5' },
  { name: 'Java',       Icon: FaJava,       color: '#ED8B00' },
  { name: 'Docker',     Icon: FaDocker,     color: '#2496ED' },
  { name: 'Redis',      Icon: SiRedis,      color: '#DC382D' },
  { name: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
]

const automationTech = [
  { name: 'Make.com',   Icon: SiMake,       color: '#6D00CC' },
  { name: 'n8n',        Icon: SiN8N,        color: '#FF6D5A' },
  { name: 'Anthropic',  Icon: RiBrainLine,  color: '#e5e5e5' },
  { name: 'MCP Server', Icon: FaServer,     color: '#6366F1' },
  { name: 'REST APIs',  Icon: TbApi,        color: '#888'    },
  { name: 'Webhooks',   Icon: TbWebhook,    color: '#888'    },
  { name: 'Docker',     Icon: FaDocker,     color: '#2496ED' },
  { name: 'Redis',      Icon: SiRedis,      color: '#DC382D' },
]

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function TechItem({ name, Icon, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'default', padding: '1rem 0.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      <div style={{ transition: 'transform 0.2s ease, filter 0.2s ease', transform: hovered ? 'scale(1.1)' : 'scale(1)', filter: hovered ? 'brightness(1.3)' : 'brightness(1)', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={28} style={{ color }} />
      </div>
      <span style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: hovered ? '#000' : '#888', transition: 'color 0.2s ease', textAlign: 'center', whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </motion.div>
  )
}

function TechGroup({ label, items, delay, isInView }) {
  const prefersReduced = useReducedMotion()
  return (
    <div style={{ marginBottom: '4rem' }}>
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '1.5rem', borderTop: '1px solid #000', paddingTop: '1.25rem' }}
      >
        {label}
      </motion.p>
      <motion.div
        variants={prefersReduced ? {} : gridVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
      >
        {items.map((tech) => <TechItem key={tech.name} {...tech} />)}
      </motion.div>
    </div>
  )
}

export default function TechStack() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReduced = useReducedMotion()

  return (
    <section id="stack" style={{ background: '#fafafa', color: '#000', padding: '6rem 1.5rem' }} ref={ref}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '8vw', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
            <span style={{ fontWeight: 900 }}>STACK </span>
            <span style={{ fontWeight: 100, fontStyle: 'italic' }}>&amp; Tools</span>
          </h2>
        </motion.div>

        <TechGroup label={t.stack.frontend}   items={frontendTech}   delay={0.1} isInView={isInView} />
        <TechGroup label={t.stack.automation} items={automationTech} delay={0.2} isInView={isInView} />
      </div>
    </section>
  )
}
