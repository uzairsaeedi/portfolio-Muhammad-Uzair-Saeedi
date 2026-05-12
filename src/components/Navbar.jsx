import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-navy-950/80">
        <div
          className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="home" smooth duration={500} className="cursor-pointer group">
              <span className="font-heading font-bold text-xl">
                <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  Uzair
                </span>
                <span className="text-white">.</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  offset={-66}
                  activeClass="!text-white"
                  className="relative px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full transition-all duration-300 group-hover:w-3/5" />
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-66}
                className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold rounded-full cursor-pointer hover:opacity-90 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Hire Me
              </Link>
              <button
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-navy-800/95 backdrop-blur-xl border-b border-white/[0.06]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-66}
                  className="block px-6 py-3.5 text-sm text-gray-300 hover:text-white hover:bg-white/[0.04] cursor-pointer transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-4">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-66}
                  className="block py-3 text-center bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold rounded-full cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
