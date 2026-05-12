import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDownload, HiArrowDown } from 'react-icons/hi'

const roles = ['Full Stack Developer', 'Mobile App Developer', 'DevOps Engineer']

const techBadges = [
  ['React.js', 'Docker', 'AWS'],
  ['Node.js', 'React Native', 'Jenkins'],
  ['MongoDB', 'Terraform', 'Python'],
]

const stats = [
  { value: 16, suffix: '+', label: 'Projects Built' },
  { value: 2, suffix: '', label: 'Internships' },
  { value: 6, suffix: '+', label: 'Tech Domains' },
]

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const steps = 28
    const interval = 1200 / steps
    let current = 0
    const inc = Math.ceil(value / steps)
    const timer = setInterval(() => {
      current = Math.min(current + inc, value)
      setCount(current)
      if (current >= value) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading font-bold text-white text-3xl tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-brand-blue/15 blur-[160px] animate-pulse-slow" />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-[130px] animate-pulse-slow"
          style={{ animationDelay: '3.5s' }}
        />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-violet/8 blur-[120px]" />
      </div>

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.9) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pt-32">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">

          {/* LEFT COLUMN */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gradient-to-r from-brand-blue to-brand-cyan flex-shrink-0" />
              <span className="font-mono text-brand-cyan text-sm tracking-widest">Hi there, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 7.5vw, 5rem)' }}
            >
              Muhammad <br />
              <span className="shimmer-text">Uzair Saeedi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 h-9 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan flex-shrink-0 animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-heading font-semibold text-gray-300"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-[1.05rem] leading-relaxed max-w-xl mb-9"
            >
              I build scalable web apps, cross-platform mobile apps, and robust cloud
              infrastructure — from idea to production deployment, end-to-end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-8 py-5 border-y border-white/[0.07] mb-9"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                  <p className="text-gray-500 text-xs mt-1 leading-none">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap gap-3.5 mb-9"
            >
              <a
                href="/assets/MuhammadUzairSaeedi.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-full text-sm hover:opacity-90 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <HiDownload size={16} /> Full Stack Resume
              </a>
              <a
                href="/assets/MuhammadUzairSaeedi_DevOps.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-brand-blue/40 text-brand-blue font-semibold rounded-full text-sm hover:bg-brand-blue/10 hover:border-brand-blue hover:-translate-y-0.5 transition-all duration-300"
              >
                <HiDownload size={16} /> DevOps Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <a href="https://github.com/uzairsaeedi" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={21} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-uzair-saeedi" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={21} />
              </a>
              <div className="h-px w-20 bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: floating tech badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {techBadges.map((row, ri) => (
              <div key={ri} className="flex flex-col gap-3"
                style={{ paddingLeft: `${ri % 2 === 1 ? 32 : 0}px` }}>
                {row.map((tech, i) => {
                  const globalIndex = ri * row.length + i
                  return (
                    <motion.div
                      key={tech}
                      animate={{ y: [0, -(6 + (globalIndex % 3) * 2), 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.5 + globalIndex * 0.35,
                        delay: globalIndex * 0.2,
                        ease: 'easeInOut',
                      }}
                      className="glass-card rounded-full px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:border-brand-blue/35 transition-colors cursor-default select-none"
                    >
                      {tech}
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <Link to="portfolio" smooth duration={600} offset={-66}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 cursor-pointer group">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-gray-600 group-hover:text-brand-blue transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest">scroll</span>
          <HiArrowDown size={14} />
        </motion.div>
      </Link>
    </section>
  )
}
