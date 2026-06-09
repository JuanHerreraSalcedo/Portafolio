import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const FORMSPREE_URL = 'https://formspree.io/f/xdavzqdg'

const fieldStyle = {
  width: '100%',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 300,
  fontSize: '1rem',
  color: '#000',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #000',
  outline: 'none',
  padding: '0.75rem 0',
  borderRadius: 0,
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '0.5rem' }}>
        {label}
      </p>
      {children}
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.errors?.[0]?.message || t.contact.errorGeneric)
        setStatus('error')
      }
    } catch {
      setErrorMsg(t.contact.errorNetwork)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      style={{ background: '#fafafa', color: '#000', padding: '6rem 1.5rem' }}
      ref={ref}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '8vw',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              margin: '0 0 1rem',
            }}
          >
            <span style={{ fontWeight: 900 }}>GET IN </span>
            <span style={{ fontWeight: 100, fontStyle: 'italic' }}>Touch</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.25rem', color: '#888', margin: 0 }}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '4rem 0', textAlign: 'center' }}>
              <FiCheckCircle size={32} color="#000" />
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: '1.5rem', margin: 0 }}>{t.contact.successTitle}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#888' }}>{t.contact.successSub}</p>
              <button
                onClick={() => setStatus('idle')}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', color: '#000', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }} className="!grid-cols-1 sm:!grid-cols-2">
                <Field label={t.contact.name}>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t.contact.namePlaceholder} style={fieldStyle} />
                </Field>
                <Field label={t.contact.email}>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={fieldStyle} />
                </Field>
              </div>
              <Field label={t.contact.subject}>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={t.contact.subjectPlaceholder} style={fieldStyle} />
              </Field>
              <Field label={t.contact.message}>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={t.contact.messagePlaceholder} style={{ ...fieldStyle, resize: 'none' }} />
              </Field>

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#ef4444', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  <FiAlertCircle size={14} /> {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: '#fff',
                  background: '#000',
                  border: 'none',
                  borderRadius: 0,
                  padding: '1rem 2rem',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.6 : 1,
                  transition: 'background 0.2s, color 0.2s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => { if (status !== 'loading') { e.currentTarget.style.background = '#e5e5e5'; e.currentTarget.style.color = '#000' } }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff' }}
              >
                {status === 'loading' ? t.contact.sending : t.contact.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
