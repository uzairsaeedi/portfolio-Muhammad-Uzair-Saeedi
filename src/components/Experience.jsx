import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer & DevOps Intern',
    company: 'Devsynth Innovations',
    period: 'Oct 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Configured Jenkins CI/CD pipelines and containerized apps with Docker for multi-environment deployments',
      'Automated cloud infrastructure provisioning using Terraform and Ansible on AWS',
      'Built MERN stack applications with JWT authentication and role-based access control',
      'Developed React Native mobile apps with Redux state management and Firebase integration',
    ],
    tags: ['Jenkins', 'Docker', 'Terraform', 'MERN', 'React Native', 'AWS', 'JWT'],
    color: '#8b5cf6',
  },
  {
    id: 2,
    role: 'React Native Mobile App Developer Intern',
    company: 'FameWheels',
    period: 'Mar 2025 – Jun 2025',
    location: 'Pakistan',
    current: false,
    highlights: [
      'Revamped UI/UX of the production React Native app, significantly improving user engagement',
      'Reduced app load time by ~30% through performance optimizations and code splitting',
      'Implemented dark theme support across the entire application',
      'Wrote unit and integration tests with Jest and React Native Testing Library',
    ],
    tags: ['React Native', 'Jest', 'Performance', 'UI/UX', 'Dark Theme', 'Testing'],
    color: '#22d3ee',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">My journey</p>
          <h2 className="section-heading">
            Work{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex gap-6 mb-8"
    >
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg z-10 mt-1"
          style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}40` }}
        >
          <HiBriefcase size={16} style={{ color: exp.color }} />
        </div>
        {!isLast && (
          <div className="flex-1 w-px mt-3"
            style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }} />
        )}
      </div>

      <div
        className="flex-1 glass-card rounded-2xl p-6 mb-4 hover:shadow-xl transition-all duration-300"
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${exp.color}30`)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
      >
        {exp.current && (
          <span
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold mb-3"
            style={{ background: `${exp.color}18`, color: exp.color }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
            Currently Here
          </span>
        )}

        <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1">{exp.role}</h3>
        <p className="font-semibold text-sm mb-3" style={{ color: exp.color }}>{exp.company}</p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
          <span className="flex items-center gap-1.5"><FaCalendarAlt size={10} />{exp.period}</span>
          <span className="flex items-center gap-1.5"><FaMapMarkerAlt size={10} />{exp.location}</span>
        </div>

        <ul className="space-y-2.5 mb-5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: `${exp.color}12`, color: `${exp.color}bb`, border: `1px solid ${exp.color}20` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
