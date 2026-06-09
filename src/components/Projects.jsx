import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  FaReact, FaDocker, FaServer,
} from 'react-icons/fa6'
import {
  SiTypescript, SiRedis, SiMake, SiN8N,
} from 'react-icons/si'
import { TbApi, TbWebhook } from 'react-icons/tb'
import { SiAngular, SiFirebase } from 'react-icons/si'
import { FaWordpress } from 'react-icons/fa6'

const projectsData = [
  {
    id: 'blueprint',
    category: 'API · TypeScript · Node.js',
    url: null,
    image: null,
    techIcons: [
      { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
      { Icon: TbApi,        color: '#888',    label: 'REST' },
      { Icon: TbWebhook,    color: '#888',    label: 'Hooks' },
    ],
  },
  {
    id: 'ceb-mcp',
    category: 'MCP · TypeScript · Redis · Docker',
    url: null,
    image: null,
    techIcons: [
      { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
      { Icon: SiRedis,      color: '#DC382D', label: 'Redis' },
      { Icon: FaDocker,     color: '#2496ED', label: 'Docker' },
      { Icon: FaServer,     color: '#6366F1', label: 'MCP' },
    ],
  },
  {
    id: 'ignitepost',
    category: 'Make.com · Webhooks · Buzz.ai',
    url: null,
    image: null,
    techIcons: [
      { Icon: SiMake,    color: '#6D00CC', label: 'Make' },
      { Icon: TbWebhook, color: '#888',    label: 'Hooks' },
    ],
  },
  {
    id: 'giftsenda',
    category: 'Make.com · REST API · OAuth',
    url: null,
    image: null,
    techIcons: [
      { Icon: SiMake, color: '#6D00CC', label: 'Make' },
      { Icon: TbApi,  color: '#888',    label: 'REST' },
    ],
  },
  {
    id: 'school',
    category: 'Angular · TypeScript · Firebase',
    url: 'https://github.com/JuanHerreraSalcedo/Jardin',
    image: 'proyecto-de-grado.png',
    techIcons: [
      { Icon: SiAngular,    color: '#DD0031', label: 'Angular' },
      { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
      { Icon: SiFirebase,   color: '#FFCA28', label: 'Firebase' },
    ],
  },
  {
    id: 'lorelis',
    category: 'WordPress · CSS · Performance',
    url: 'https://lorelis-painting.com/',
    image: 'lorelis-painting.png',
    techIcons: [
      { Icon: FaWordpress, color: '#21759B', label: 'WP' },
    ],
  },
  {
    id: 'minigame',
    category: 'HTML · CSS · JavaScript',
    url: 'https://juanherrerasalcedo.github.io/Juego/',
    image: 'juego.png',
    techIcons: [],
  },
]

const titleMap = {
  blueprint:  'Blueprint API',
  'ceb-mcp':  'CEB MCP Server',
  ignitepost: 'IgnitePost Workflow',
  giftsenda:  'GiftSenda API',
  school:     'School Platform',
  lorelis:    'Lorelis Painting',
  minigame:   'JS Mini Game',
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const imgSrc = project.image ? import.meta.env.BASE_URL + project.image : null

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => project.url && window.open(project.url, '_blank', 'noopener noreferrer')}
      style={{
        position: 'relative',
        background: '#18181b',
        overflow: 'hidden',
        cursor: project.url ? 'pointer' : 'default',
        aspectRatio: '16/10',
      }}
    >
      {/* Image / bg layer — scales on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {imgSrc && !imgError ? (
          <img
            src={imgSrc}
            alt={titleMap[project.id]}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)' }} />
        )}
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 55%)',
          zIndex: 1,
        }}
      />

      {/* Info + tech badges */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem 2.5rem',
          zIndex: 2,
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        }}
      >
        {/* Tech icon badges */}
        {project.techIcons.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {project.techIcons.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                style={{
                  transition: 'color 0.3s ease',
                  color: hovered ? '#fff' : '#888',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  size={16}
                  style={{
                    color: hovered ? color : '#888',
                    transition: 'color 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <p
          style={{
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#888',
            marginBottom: '0.4rem',
          }}
        >
          {project.category}
        </p>
        <h3
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
            color: '#e5e5e5',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {titleMap[project.id]}
        </h3>
      </div>

      {/* Circle action button */}
      {project.url && (
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 3,
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <FiArrowUpRight size={16} color="#000" />
        </div>
      )}
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" style={{ background: '#fff', color: '#000', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '8vw', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
            <span style={{ fontWeight: 900, textTransform: 'uppercase' }}>SELECTED </span>
            <span style={{ fontWeight: 100, fontStyle: 'italic' }}>works</span>
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}
          className="!grid-cols-1 sm:!grid-cols-2"
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
