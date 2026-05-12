import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FaGithub, FaPlay, FaCalendarAlt, FaCode } from 'react-icons/fa'
import { HiArrowLeft, HiChevronRight } from 'react-icons/hi'
import { projects, categoryColors } from '../data/portfolioData'
import ProjectNavbar from './ProjectNavbar'

const categoryAccent = {
  Web: '#8b5cf6',
  Mobile: '#22d3ee',
  DevOps: '#f97316',
  'AI/ML': '#ec4899',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-8xl font-heading font-bold text-white/5 mb-4">404</p>
          <p className="text-gray-500 mb-6">Project not found.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-full text-sm font-semibold"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    )
  }

  const accent = categoryAccent[project.category] || '#8b5cf6'
  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX, background: `linear-gradient(90deg, ${accent}, #22d3ee)` }}
      />

      <ProjectNavbar />

      {/* Image showcase */}
      <div className="pt-16 relative bg-navy-950 overflow-hidden">
        {/* Blurred atmospheric backdrop */}
        <img
          src={project.image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-[0.07] saturate-200 pointer-events-none"
        />

        {/* Contained screenshot */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.03]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[480px] object-contain bg-navy-900"
              style={{ objectPosition: 'top center' }}
            />
          </motion.div>
        </div>

        {/* Fade into body */}
        <div className="h-14 bg-gradient-to-b from-transparent to-navy-900" />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-5">

        {/* Title card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="glass-card rounded-2xl p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className={`inline-block text-[11px] px-3 py-1 rounded-full font-semibold mb-3 ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              <h1 className="font-heading font-bold text-white text-2xl sm:text-[1.9rem] leading-tight mb-1.5">
                {project.title}
              </h1>
              <p className="text-gray-400 text-sm">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2.5 flex-shrink-0">
              {project.github && project.github !== 'https://github.com/uzairsaeedi' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-white rounded-full text-sm font-semibold hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaGithub size={15} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-full text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-brand-blue/25"
                >
                  <FaPlay size={11} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 pt-5 mt-5 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaCalendarAlt size={12} style={{ color: accent }} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaCode size={12} style={{ color: accent }} />
              <span>{project.tags.length} Technologies</span>
            </div>
            <span className="ml-auto text-[11px] text-gray-600 tabular-nums">{idx + 1} / {projects.length}</span>
          </div>
        </motion.div>

        {/* About + Tech Stack */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-7"
          >
            <SectionLabel accent={accent}>About This Project</SectionLabel>
            <p className="text-gray-300 text-[0.94rem] leading-[1.8]">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-7"
          >
            <SectionLabel accent={accent}>Tech Stack</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium"
                  style={{
                    background: `${accent}12`,
                    border: `1px solid ${accent}28`,
                    color: `${accent}cc`,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-card rounded-2xl p-7"
        >
          <SectionLabel accent={accent}>Key Features</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3.5 p-4 rounded-xl"
                style={{ background: `${accent}08`, border: `1px solid ${accent}18` }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold font-heading"
                  style={{ background: `${accent}22`, color: accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed pt-0.5">{feat}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-between pt-2 pb-6"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
          >
            <HiArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm">All Projects</span>
          </button>

          <div className="flex gap-2.5">
            {prev && (
              <button
                onClick={() => navigate(`/projects/${prev.slug}`)}
                className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-500 glass-card rounded-full hover:text-white hover:border-white/20 transition-all"
              >
                <HiArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline max-w-[120px] truncate">{prev.title.split(' ').slice(0, 3).join(' ')}</span>
                <span className="sm:hidden">Prev</span>
              </button>
            )}
            {next && (
              <button
                onClick={() => navigate(`/projects/${next.slug}`)}
                className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-500 glass-card rounded-full hover:text-white hover:border-white/20 transition-all"
              >
                <span className="hidden sm:inline max-w-[120px] truncate">{next.title.split(' ').slice(0, 3).join(' ')}</span>
                <span className="sm:hidden">Next</span>
                <HiChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SectionLabel({ accent, children }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-4 h-[2px] rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
      <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">{children}</span>
    </div>
  )
}
