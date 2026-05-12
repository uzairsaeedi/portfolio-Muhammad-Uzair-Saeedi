import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCircles = [
  { name: 'Mobile Development', level: 95 },
  { name: 'Web Development', level: 89 },
  { name: 'DevOps & CI/CD', level: 85 },
  { name: 'Cloud Computing', level: 85 },
]

const techGroups = [
  { label: 'Frontend',    color: '#8b5cf6', items: ['React.js', 'Angular', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { label: 'Backend',     color: '#10b981', items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT Auth'] },
  { label: 'Mobile',      color: '#a855f7', items: ['React Native', 'Android (Java)', 'Kotlin', 'Firebase', 'Material Design'] },
  { label: 'DevOps',      color: '#f97316', items: ['Docker', 'Jenkins', 'Kubernetes', 'GitHub Actions', 'Ansible'] },
  { label: 'Cloud & IaC', color: '#22d3ee', items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Terraform', 'Google Cloud'] },
  { label: 'Database & AI', color: '#ec4899', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Python', 'TensorFlow'] },
]

function CircularSkill({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [progress, setProgress] = useState(0)

  const r = 52
  const circ = 2 * Math.PI * r
  const offset = circ - (progress / 100) * circ
  const id = `sk-${index}`

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setProgress(skill.level), index * 100)
    return () => clearTimeout(t)
  }, [inView, skill.level, index])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-cyan/10 blur-lg scale-90" />
        <svg viewBox="0 0 120 120" className="relative w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="7" />
          <motion.circle
            cx="60" cy="60" r={r}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: index * 0.12 }}
          />
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading font-bold text-2xl text-white leading-none">{progress}%</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm text-center font-medium leading-tight max-w-[110px]">{skill.name}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">What I know</p>
          <h2 className="section-heading">
            My{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mb-24">
          {skillCircles.map((skill, i) => (
            <CircularSkill key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <div className="gradient-line mb-16 mx-auto max-w-xs" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.07 }}
              className="glass-card rounded-2xl p-5 hover:border-white/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.color, boxShadow: `0 0 8px ${group.color}80` }} />
                <h4 className="font-heading font-semibold text-sm" style={{ color: group.color }}>
                  {group.label}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.07 + i * 0.04 }}
                    className="text-xs px-2.5 py-1 rounded-full text-gray-300 hover:text-white cursor-default transition-colors"
                    style={{ background: `${group.color}10`, border: `1px solid ${group.color}22` }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
