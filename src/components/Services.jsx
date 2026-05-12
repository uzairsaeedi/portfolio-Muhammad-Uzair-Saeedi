import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

const services = [
  {
    Icon: FaCode,
    title: 'Website Development',
    description: 'Full-stack web applications built with MERN Stack, Angular, and Spring Boot — optimized for performance, scalability, and SEO.',
    accent: '#8b5cf6',
    tags: ['MERN', 'Angular', 'REST APIs'],
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile apps for Android and iOS using React Native and Java/Kotlin.',
    accent: '#a855f7',
    tags: ['React Native', 'Android', 'Firebase'],
  },
  {
    Icon: FaCloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure on AWS with automated CI/CD pipelines, Docker containers, Kubernetes orchestration, and IaC with Terraform.',
    accent: '#f97316',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    Icon: FaDatabase,
    title: 'Database Management',
    description: 'Robust database architecture and query optimization for MySQL, PostgreSQL, and MongoDB with a focus on reliability and speed.',
    accent: '#10b981',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    Icon: FaBrain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions using Python, TensorFlow, and LSTM models for predictive analytics, smart automation, and data insights.',
    accent: '#ec4899',
    tags: ['Python', 'TensorFlow', 'LSTM'],
  },
  {
    Icon: FaRobot,
    title: 'Automation & Testing',
    description: 'End-to-end test automation with Selenium and Jest, plus workflow automation to eliminate repetitive tasks and ensure quality.',
    accent: '#6366f1',
    tags: ['Selenium', 'Jest', 'CI Testing'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-navy-900 aurora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">What I offer</p>
          <h2 className="section-heading">
            My{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} num={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, num }) {
  const { Icon, title, description, accent, tags } = service
  const numStr = String(num).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative glass-card rounded-2xl p-7 overflow-hidden hover:shadow-2xl transition-all duration-400 cursor-default"
    >
      <span
        className="absolute -top-2 -right-1 font-heading font-bold text-[5rem] leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-400"
        style={{ color: accent }}
      >
        {numStr}
      </span>

      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-400 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>

      <h3 className="font-heading font-bold text-white text-lg mb-2.5">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded font-medium"
              style={{ background: `${accent}12`, color: `${accent}cc` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <HiArrowNarrowRight
          size={16}
          className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2"
        />
      </div>
    </motion.div>
  )
}
