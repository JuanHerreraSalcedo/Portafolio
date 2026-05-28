import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiSend,
  FiUser,
  FiMail,
  FiTag,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_ID_HERE'

const inputClass =
  'w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#94A3B8]/50 text-sm transition-all duration-200 outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/15 hover:border-white/20'

function Field({ label, icon: Icon, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]/50 pointer-events-none"
          />
        )}
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

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
    <section id="contact" className="py-28 px-4 bg-[#111118] relative overflow-hidden" ref={ref}>
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            {t.contact.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-[#F1F5F9]">{t.contact.title}</h2>
          <p className="text-[#94A3B8] mt-4 text-base max-w-sm mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl bg-[#1A1A2E] border border-white/5 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

          <div className="p-8 sm:p-10">
            {/* ── SUCCESS STATE ── */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-4 py-14 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center"
                >
                  <FiCheckCircle size={28} className="text-emerald-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-[#F1F5F9]">{t.contact.successTitle}</h3>
                  <p className="text-[#94A3B8] mt-1">{t.contact.successSub}</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium underline underline-offset-4"
                >
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              /* ── FORM ── */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.contact.name} icon={FiUser}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.namePlaceholder}
                      className={`${inputClass} pl-9`}
                    />
                  </Field>
                  <Field label={t.contact.email} icon={FiMail}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={`${inputClass} pl-9`}
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field label={t.contact.subject} icon={FiTag}>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.subjectPlaceholder}
                    className={`${inputClass} pl-9`}
                  />
                </Field>

                {/* Message */}
                <Field label={t.contact.message} icon={null}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {/* Error banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <FiAlertCircle size={15} className="shrink-0 mt-0.5" />
                    {errorMsg}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-500/25"
                >
                  {status === 'loading' ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      {t.contact.submit}
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
