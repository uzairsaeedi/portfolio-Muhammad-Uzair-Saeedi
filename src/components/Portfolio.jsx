import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { HiExternalLink, HiX } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { projects, categoryColors } from '../data/portfolioData'

const categories = ['All', 'Web', 'Mobile', 'DevOps', 'AI/ML']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [demoUrl, setDemoUrl] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-28 bg-navy-800 aurora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-tag mb-3">What I've built</p>
          <h2 className="section-heading mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-500 text-sm">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {active !== 'All' && ` in ${active}`}
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  active === cat
                    ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/25'
                    : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
                <span className={`text-xs px-1.5 py-0.5 rounded-full leading-none ${active === cat ? 'bg-white/20' : 'bg-white/5'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onDemo={setDemoUrl}
                globalIndex={projects.findIndex((p) => p.id === project.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {demoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setDemoUrl(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="bg-navy-800 border border-white/10 rounded-2xl p-5 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-white">Live App Demo</h3>
                <button
                  onClick={() => setDemoUrl(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full glass-card text-gray-400 hover:text-white transition-colors"
                >
                  <HiX size={16} />
                </button>
              </div>
              <iframe
                src={demoUrl}
                width="100%"
                height="560"
                className="rounded-xl bg-navy-900"
                title="App Demo"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, index, onDemo, globalIndex }) {
  const navigate = useNavigate()
  const num = String(globalIndex + 1).padStart(2, '0')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-brand-blue/25 hover:shadow-2xl hover:shadow-brand-blue/8 transition-all duration-400 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-navy-700 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
          loading="lazy"
        />

        <div className="absolute top-3 left-3 w-9 h-9 glass-card rounded-xl flex items-center justify-center">
          <span className="font-mono text-xs text-gray-400 font-semibold">{num}</span>
        </div>

        {project.demo && (
          <div className="absolute top-3 right-3 text-[10px] px-2 py-0.5 bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan rounded-full font-semibold">
            Live Demo
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(project.link)}
            className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-brand-blue transition-colors duration-200"
          >
            <HiExternalLink size={14} /> View Project
          </button>
          {project.demo && (
            <button
              onClick={() => onDemo(project.demo)}
              className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-brand-cyan transition-colors duration-200"
            >
              <FaPlay size={11} /> Demo
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="p-5 flex flex-col flex-1 cursor-pointer"
        onClick={() => navigate(project.link)}
      >
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-heading font-semibold text-white text-[0.9rem] leading-snug">
            {project.title}
          </h3>
          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap flex-shrink-0 ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>
        <p className="text-gray-500 text-xs mb-4">{project.subtitle}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 bg-brand-blue/8 text-brand-blue/70 border border-brand-blue/12 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
