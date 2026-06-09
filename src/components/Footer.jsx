import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/JuanHerreraSalcedo',                                  Icon: FaGithub   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-camilo-herrera-salcedo-aa7147258/',     Icon: FaLinkedin },
  { label: 'Email',    href: 'mailto:juank.hs5500@gmail.com',                                           Icon: null       },
]

function WavyLink({ label, href, Icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="wavy-underline-white"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        color: '#000',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        letterSpacing: '-0.01em',
        textDecoration: 'none',
      }}
    >
      {Icon && <Icon size={16} style={{ flexShrink: 0 }} />}
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#fafafa', color: '#000', padding: '5rem 1.5rem 3rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* "START A PROJECT" */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            display: 'block',
            width: '100%',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 900,
            fontSize: '12vw',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: '#000',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid #000',
            paddingBottom: '2rem',
            marginBottom: '4rem',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          START A PROJECT
        </button>

        {/* 3-column grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'end' }}
          className="!grid-cols-1 md:!grid-cols-3"
        >
          {/* Col 1 — Social links with icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {socialLinks.map(({ label, href, Icon }) => (
              <WavyLink key={label} label={label} href={href} Icon={Icon} />
            ))}
          </div>

          {/* Col 2 — Email large */}
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(1rem, 2.5vw, 1.875rem)',
                color: '#000',
                margin: 0,
                letterSpacing: '-0.02em',
                wordBreak: 'break-all',
              }}
            >
              juank.hs5500@gmail.com
            </p>
          </div>

          {/* Col 3 — Rights */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.25rem' }}>
              © 2026 Juan Camilo Herrera Salcedo
            </p>
            <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: 0 }}>
              Cali, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
