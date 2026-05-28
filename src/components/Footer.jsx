import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const socialLinks = [
  {
    Icon: FiGithub,
    href: 'https://github.com/JuanHerreraSalcedo',
    label: 'GitHub',
    hoverClass: 'hover:text-[#F1F5F9] hover:border-white/20',
  },
  {
    Icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/juan-camilo-herrera-salcedo-aa7147258/',
    label: 'LinkedIn',
    hoverClass: 'hover:text-indigo-400 hover:border-indigo-500/40',
  },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-[#111118] border-t border-white/5">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-sm text-white shadow-lg shadow-indigo-500/25">
                JH
              </div>
              <span className="font-bold text-[#F1F5F9]">Juan Camilo Herrera Salcedo</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              {t.footer.role}
            </p>
            <p className="text-[#94A3B8]/60 text-xs mt-1">
              © 2026 — {t.footer.rights}
            </p>
          </motion.div>

          {/* Built with badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A2E] border border-white/5 text-xs text-[#94A3B8]"
          >
            {t.footer.builtWith}
            <span className="text-[#61DAFB] font-semibold">React</span>
            <span className="text-white/20">·</span>
            <span className="text-[#FFB224] font-semibold">Vite</span>
            <span className="text-white/20">·</span>
            <span className="text-[#06B6D4] font-semibold">Tailwind</span>
            <FiHeart size={11} className="text-red-400 fill-red-400" />
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ Icon, href, label, hoverClass }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-xl bg-[#1A1A2E] border border-white/5 flex items-center justify-center text-[#94A3B8] ${hoverClass} transition-all duration-200`}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
