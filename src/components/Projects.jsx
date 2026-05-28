import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLock, FiStar, FiZap } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

// Static data — visual + structural properties only; text comes from translations
const projectsData = [
  {
    id: 'blueprint',
    stack: ['Node.js', 'REST API', 'Webhooks', 'Make.com'],
    statusKey: 'liveprod',
    liveUrl: null,
    repoUrl: null,
    image: null,
    gradient: 'from-indigo-500/30 via-blue-600/20 to-transparent',
    accent: '#4F46E5',
    isInternal: true,
    featuredBadge: 'featured',
  },
  {
    id: 'ceb-mcp',
    stack: ['TypeScript', 'MCP Protocol', 'Node.js', 'Redis', 'BullMQ', 'Docker'],
    statusKey: 'liveprod',
    liveUrl: null,
    repoUrl: null,
    image: null,
    gradient: 'from-cyan-500/30 via-teal-500/20 to-transparent',
    accent: '#06B6D4',
    isInternal: true,
    featuredBadge: 'ai',
  },
  {
    id: 'minigame',
    stack: ['HTML', 'CSS', 'JavaScript'],
    statusKey: 'live',
    liveUrl: 'https://juanherrerasalcedo.github.io/Juego/',
    repoUrl: null,
    image: '/juego.png',
    gradient: 'from-yellow-500/30 via-orange-500/20 to-transparent',
    accent: '#F7DF1E',
  },
  {
    id: 'school',
    stack: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap', 'SASS'],
    statusKey: 'live',
    liveUrl: null,
    repoUrl: 'https://github.com/JuanHerreraSalcedo/Jardin',
    image: '/proyecto-de-grado.png',
    gradient: 'from-red-500/30 via-pink-500/20 to-transparent',
    accent: '#DD0031',
  },
  {
    id: 'lorelis',
    stack: ['WordPress', 'CSS', 'HTML'],
    statusKey: 'live',
    liveUrl: 'https://lorelis-painting.com/',
    repoUrl: null,
    image: '/lorelis-painting.png',
    gradient: 'from-blue-500/30 via-cyan-500/20 to-transparent',
    accent: '#21759B',
  },
  {
    id: 'ignitepost',
    stack: ['Make.com', 'Webhooks', 'Buzz.ai'],
    statusKey: 'liveprod',
    liveUrl: null,
    repoUrl: null,
    image: null,
    gradient: 'from-violet-500/30 via-purple-500/20 to-transparent',
    accent: '#7C3AED',
    isInternal: true,
  },
  {
    id: 'giftsenda',
    stack: ['Make.com', 'REST API', 'OAuth'],
    statusKey: 'testing',
    liveUrl: null,
    repoUrl: null,
    image: null,
    gradient: 'from-orange-500/30 via-[#FF6B35]/20 to-transparent',
    accent: '#FF6B35',
    isInternal: true,
  },
]

const statusConfig = {
  live:     { dot: 'bg-emerald-400', badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  liveprod: { dot: 'bg-emerald-400', badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  testing:  { dot: 'bg-orange-400',  badge: 'bg-orange-500/15  text-orange-400  border-orange-500/25'  },
}

const projectIndexMap = { blueprint: 0, 'ceb-mcp': 1, minigame: 2, school: 3, lorelis: 4, ignitepost: 5, giftsenda: 6 }

function ProjectImage({ project, statusLabel, internalLabel, featuredLabel, aiLabel }) {
  const [imgError, setImgError] = useState(false)
  const cfg = statusConfig[project.statusKey]

  return (
    <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.gradient} bg-[#0D0D18]`}>
      {project.image && !imgError ? (
        <img
          src={import.meta.env.BASE_URL + project.image.slice(1)}
          alt={project.title}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-5xl font-black opacity-20" style={{ color: project.accent }}>
            {project.id.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent" />

      <div className="absolute top-4 left-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${cfg.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {statusLabel}
        </span>
      </div>

      {project.featuredBadge === 'featured' ? (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            <FiStar size={10} />
            {featuredLabel}
          </span>
        </div>
      ) : project.featuredBadge === 'ai' ? (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <FiZap size={10} />
            {aiLabel}
          </span>
        </div>
      ) : project.isInternal ? (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[#94A3B8] border border-white/10">
            <FiLock size={10} />
            {internalLabel}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function ProjectCard({ project, index, t }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const i18nIndex = projectIndexMap[project.id]
  const { title, description } = t.projects.items[i18nIndex]

  const statusLabelMap = {
    live: t.projects.statusLive,
    liveprod: t.projects.statusLiveProd,
    testing: t.projects.statusTesting,
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col rounded-2xl bg-[#1A1A2E] ${project.featuredBadge ? 'border border-indigo-500/20 shadow-md shadow-indigo-500/5' : 'border border-white/5'} overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40`}
    >
      <ProjectImage
        project={project}
        statusLabel={statusLabelMap[project.statusKey]}
        internalLabel={t.projects.internal}
        featuredLabel={t.projects.featuredBadge}
        aiLabel={t.projects.aiBadge}
      />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-bold text-[#F1F5F9] mb-2 group-hover:text-indigo-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 flex-1">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-lg bg-[#0A0A0F] text-[#94A3B8] text-xs font-medium border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex gap-4 pt-4 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
              >
                <FiExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                {t.projects.liveDemo}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-[#94A3B8] hover:text-[#F1F5F9] transition-colors duration-200"
              >
                <FiGithub size={14} />
                {t.projects.repository}
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-2xl"
        style={{ background: `linear-gradient(to bottom, ${project.accent}, transparent)` }}
      />
    </motion.article>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-28 px-4 bg-[#111118] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.projects.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.projects.title}</h2>
          <p className="text-[#94A3B8] mt-4 text-base max-w-lg mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
