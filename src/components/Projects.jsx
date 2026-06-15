import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { FaServer } from 'react-icons/fa6'
import { TbApi, TbWebhook } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { useLanguage } from '../context/LanguageContext'

// Card 8 (JS Mini Game) spans 2 cols on desktop so no empty cell in row 3
const projectsData = [
  {
    id: 'blueprint',
    category: 'API · TypeScript · Node.js',
    bg: '#0a0a2e',
    watermark: 'API',
    WatermarkIcon: TbApi,
    image: null,
    imgOverlay: null,
    status: 'testing',
    gridCol: 'span 1',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'ceb-mcp',
    category: 'MCP · TypeScript · Redis · Docker',
    bg: '#0a2e0a',
    watermark: 'MCP',
    WatermarkIcon: FaServer,
    image: null,
    imgOverlay: null,
    status: 'testing',
    gridCol: 'span 1',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'salesintel',
    category: 'WordPress · UI/UX · Automation',
    bg: '#0a0a0a',
    watermark: null,
    WatermarkIcon: null,
    image: 'sales_intel_report.png',
    imgOverlay: 'rgba(0,0,0,0.4)',
    status: 'liveprod',
    gridCol: 'span 1',
    liveUrl: 'https://salesintelreports.com/',
    repoUrl: null,
    stack: ['WordPress', 'CSS', 'UI/UX', 'SEO'],
  },
  {
    id: 'ignitepost',
    category: 'Make.com · Webhooks · Buzz.ai',
    bg: '#2e1a0a',
    watermark: 'FLOW',
    WatermarkIcon: MdEmail,
    image: null,
    imgOverlay: null,
    status: 'liveprod',
    gridCol: 'span 1',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'giftsenda',
    category: 'Make.com · REST API · OAuth',
    bg: '#2e0a1a',
    watermark: 'API',
    WatermarkIcon: TbWebhook,
    image: null,
    imgOverlay: null,
    status: 'liveprod',
    gridCol: 'span 1',
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'school',
    category: 'Angular · TypeScript · Firebase',
    bg: '#0a0a0a',
    watermark: null,
    WatermarkIcon: null,
    image: 'proyecto-de-grado.png',
    imgOverlay: 'rgba(0,0,0,0.35)',
    status: 'live',
    gridCol: 'span 1',
    liveUrl: null,
    repoUrl: 'https://github.com/JuanHerreraSalcedo/Jardin',
  },
  {
    id: 'lorelis',
    category: 'WordPress · CSS · Performance',
    bg: '#0a0a0a',
    watermark: null,
    WatermarkIcon: null,
    image: 'lorelis-painting.png',
    imgOverlay: 'rgba(0,0,0,0.35)',
    status: 'liveprod',
    gridCol: 'span 1',
    liveUrl: 'https://lorelis-painting.com/',
    repoUrl: null,
  },
  {
    id: 'minigame',
    category: 'HTML · CSS · JavaScript',
    bg: '#0a0a0a',
    watermark: null,
    WatermarkIcon: null,
    image: 'juego.png',
    imgOverlay: 'rgba(0,0,0,0.35)',
    status: 'live',
    gridCol: 'span 2',
    liveUrl: 'https://juanherrerasalcedo.github.io/Juego/',
    repoUrl: null,
  },
]

const titleMap = {
  blueprint:  'Blueprint API',
  'ceb-mcp':  'CEB MCP Server',
  salesintel: 'Sales Intel Reports',
  ignitepost: 'IgnitePost',
  giftsenda:  'GiftSenda API',
  school:     'School Platform',
  lorelis:    'Lorelis Painting',
  minigame:   'JS Mini Game',
}

const indexMap = {
  blueprint:  0,
  'ceb-mcp':  1,
  salesintel: 2,
  minigame:   3,
  school:     4,
  lorelis:    5,
  ignitepost: 6,
  giftsenda:  7,
}

const mono = {
  fontFamily: '"Courier New", Courier, monospace',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

// ── Project card ─────────────────────────────────────────────────
function ProjectCard({ project, onOpen, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const prefersReduced = useReducedMotion()
  const imgSrc = project.image ? import.meta.env.BASE_URL + project.image : null
  const num = String(index + 1).padStart(2, '0')
  const { WatermarkIcon } = project
  const isLive = project.status !== 'testing'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReduced ? 0 : 0.55,
        delay: prefersReduced ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '280px',
        gridColumn: project.gridCol,
        background: project.bg,
      }}
    >
      {/* Animated top border */}
      <motion.div
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: prefersReduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 0, left: 0, height: '2px', background: '#fff', zIndex: 5 }}
      />

      {/* Background layer — scales on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        transition: prefersReduced ? 'none' : 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
      }}>
        {imgSrc && !imgError ? (
          // Image card
          <>
            <img
              src={imgSrc}
              alt={titleMap[project.id]}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: project.imgOverlay }} />
          </>
        ) : (
          // Color card: text watermark + icon
          <>
            {project.watermark && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', pointerEvents: 'none',
              }}>
                <span style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 900,
                  fontSize: '80px',
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}>
                  {project.watermark}
                </span>
              </div>
            )}
            {WatermarkIcon && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <WatermarkIcon size={64} style={{ color: 'rgba(255,255,255,0.2)' }} />
              </div>
            )}
          </>
        )}
      </div>

      {/* Hover darkening */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.3 }}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 2, pointerEvents: 'none' }}
      />

      {/* Bottom gradient for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)',
        zIndex: 3,
      }} />

      {/* Top row: number (left) + status dot (right) */}
      <div style={{
        position: 'absolute', top: '1rem', left: '1rem', right: '1rem',
        zIndex: 4,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ ...mono, fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>
          {num}
        </span>
        <div style={{
          width: 6, height: 6, borderRadius: '50%',
          background: isLive ? '#22c55e' : '#6b7280',
        }} />
      </div>

      {/* Bottom: category + title + arrow */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.25rem', zIndex: 4 }}>
        <p style={{
          ...mono, fontSize: '8px',
          color: 'rgba(255,255,255,0.5)',
          margin: '0 0 0.3rem',
        }}>
          {project.category}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h3 style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 900,
            fontSize: '18px',
            color: '#fff',
            margin: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            {titleMap[project.id]}
          </h3>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
            transition={{ duration: prefersReduced ? 0 : 0.22 }}
            style={{
              fontSize: '18px',
              color: '#fff',
              flexShrink: 0,
              marginLeft: '0.5rem',
              lineHeight: 1,
            }}
          >
            ↗
          </motion.span>
        </div>
      </div>
    </motion.article>
  )
}

// ── Project drawer ────────────────────────────────────────────────
function ProjectDrawer({ project, onClose, t }) {
  const prefersReduced = useReducedMotion()
  const [imgError, setImgError] = useState(false)
  const item = t.projects.items[indexMap[project.id]] || {}
  const imgSrc = project.image ? import.meta.env.BASE_URL + project.image : null

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const statusLabel =
    project.status === 'liveprod' ? t.projects.statusLiveProd :
    project.status === 'testing'  ? t.projects.statusTesting  :
    t.projects.statusLive

  const stackBadges = project.stack || project.category.split(' · ').map((s) => s.trim())
  const { WatermarkIcon } = project

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.3 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000 }}
      />

      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: prefersReduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(480px, 100vw)',
          background: '#09090b',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          zIndex: 1001, overflowY: 'auto',
          padding: '3rem 2.5rem',
          color: '#e5e5e5',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'none', border: 'none',
            color: '#888', fontSize: '1.25rem',
            cursor: 'pointer', lineHeight: 1,
            fontFamily: 'Inter, sans-serif', padding: '0.25rem 0.5rem',
          }}
        >✕</button>

        <p style={{ ...mono, fontSize: '11px', color: '#888', marginTop: 0, marginBottom: '1rem' }}>
          {project.category}
        </p>

        <h2 style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 900,
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          color: '#e5e5e5', marginTop: 0, marginBottom: '2rem',
        }}>
          {item.title || titleMap[project.id]}
        </h2>

        {/* Image or gradient placeholder */}
        <div style={{ width: '100%', aspectRatio: '16/10', marginBottom: '2rem', overflow: 'hidden', background: project.bg || '#111' }}>
          {imgSrc && !imgError ? (
            <img
              src={imgSrc}
              alt={titleMap[project.id]}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, display: 'block' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: project.bg || '#111' }}>
              {WatermarkIcon && <WatermarkIcon size={56} style={{ color: 'rgba(255,255,255,0.15)' }} />}
            </div>
          )}
        </div>

        <p style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          fontSize: '0.95rem', color: '#aaa',
          lineHeight: 1.75, marginBottom: '2rem', marginTop: 0,
        }}>
          {item.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: project.status === 'testing' ? '#6b7280' : '#22c55e',
            flexShrink: 0,
          }} />
          <span style={{ ...mono, fontSize: '11px', color: '#888' }}>{statusLabel}</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {stackBadges.map((badge) => (
            <span key={badge} style={{ ...mono, fontSize: '10px', color: '#888', border: '1px solid #333', padding: '0.3rem 0.75rem' }}>
              {badge}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 500,
              fontSize: '0.875rem', color: '#000', background: '#fff',
              padding: '0.75rem 2rem', textDecoration: 'none',
              display: 'inline-block', letterSpacing: '-0.01em',
            }}>
              {t.projects.liveDemo} ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 500,
              fontSize: '0.875rem', color: '#e5e5e5',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '0.75rem 2rem', textDecoration: 'none',
              display: 'inline-block', letterSpacing: '-0.01em',
            }}>
              {t.projects.repository} ↗
            </a>
          )}
          {!project.liveUrl && !project.repoUrl && (
            <span style={{
              ...mono, fontSize: '11px', color: '#555',
              border: '1px solid #333', padding: '0.75rem 2rem',
              display: 'inline-block',
            }}>
              {t.projects.internal}
            </span>
          )}
        </div>
      </motion.aside>
    </>
  )
}

// ── Projects section ──────────────────────────────────────────────
export default function Projects() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const prefersReduced = useReducedMotion()

  return (
    <>
      <section id="projects" style={{ background: '#fff', color: '#000', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Section header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap' }}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
              }}>
                <span style={{ fontWeight: 900, textTransform: 'uppercase' }}>SELECTED </span>
                <span style={{ fontWeight: 100, fontStyle: 'italic' }}>works</span>
              </h2>
              <span style={{ ...mono, fontSize: '13px', color: '#888' }}>( 08 )</span>
            </div>

            <motion.div
              initial={{ width: '0%' }}
              animate={headerInView ? { width: '100%' } : {}}
              transition={{ duration: prefersReduced ? 0 : 1.1, delay: prefersReduced ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '1px', background: '#000', marginTop: '1.5rem' }}
            />
          </motion.div>

          {/* Colorful grid */}
          <div
            className="masonry-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4px',
            }}
          >
            {projectsData.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectDrawer
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  )
}
