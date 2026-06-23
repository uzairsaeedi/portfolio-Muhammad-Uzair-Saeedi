import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    role: 'DevOps Engineer',
    company: 'TeResol',
    website: 'https://teresol.com/',
    period: 'June 2026 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    highlights: [
      'As a DevOps Engineer, I deploy and manage enterprise-grade Core Banking and Digital Banking platforms on Kubernetes clusters with 100+ nodes and 2,500+ microservices. My work includes designing highly available infrastructure, configuring multi-master Kubernetes, HAProxy/Traefik, Ingress, Longhorn, and Istio, while implementing end-to-end observability with the EFK Stack, Prometheus, Grafana, and Kiali. I integrate containerized applications with enterprise databases and middleware, ensuring secure, scalable, and reliable production environments. Additionally, I designed and developed an internal DevOps Portal using React.js (frontend) and Node.js (backend) that enables the DevOps team to view deployed image tags across multiple environments, monitor deployed Kubernetes services using kubeconfig from different clusters, compare entire repositories or individual YAML files to identify missing or inconsistent environment variables, and streamline deployment verification and environment consistency checks.'
    ],
    tags: ['Jenkins', 'Docker', 'Terraform', 'Kubernetes', 'ELK', 'Calico', 'Istio', 'Harbor', 'HA Proxy', 'Prometheus'],
    color: '#f97316',
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Devsynth Innovations',
    website: 'https://devsynth-innovations.com/',
    period: 'Oct 2025 – May 2026',
    location: 'Karachi, Pakistan',
    current: false,
    highlights: [
      'As a Software Engineer, I built and managed cloud-native infrastructure on AWS EC2 and ECS using Docker and Terraform, reducing deployment time by 40% and infrastructure costs by 30%. I designed end-to-end Jenkins CI/CD pipelines integrated with GitHub, SonarQube, and Trivy, eliminating 80% of manual deployments while improving code quality and strengthening application security by identifying and resolving 150+ vulnerabilities before production. Alongside my DevOps responsibilities, I developed and delivered React Native mobile applications, optimizing performance and user experience, while supporting scalable MERN stack application.'
    ],
    tags: ['Jenkins', 'Docker', 'Terraform', 'MERN', 'React Native', 'AWS', 'JWT', 'SonarQube', 'Trivy'],
    color: '#8b5cf6',
  },
  {
    id: 3,
    role: 'React Native Mobile App Developer Intern',
    company: 'FameWheels',
    website: 'https://www.famewheels.com/',
    period: 'Mar 2025 – Jun 2025',
    location: 'Karachi, Pakistan',
    current: false,
    highlights: [
      'As a React Native Developer, I developed and maintained a production-grade mobile application with 10,000+ installs and 3,000+ daily active users, delivering weekly releases while maintaining a 99% crash-free rate through automated deployment workflows. I architected and integrated AWS S3, CloudFront CDN, and EC2 infrastructure, reducing content delivery latency by 65% and supporting 10,000+ concurrent users. I also designed and implemented 25+ cross-platform screens, introduced a system-wide dark theme that increased user retention by 35%, and collaborated with backend engineers to optimize APIs, reducing response times from 2.5 seconds to 800 milliseconds and significantly improving application performance and user experience.'
    ],
    tags: ['React Native', 'Jest', 'Performance', 'UI/UX', 'Dark Theme', 'Testing', 'AWS', 'CloudFront', 'S3'],
    color: '#22d3ee',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-navy-900 aurora-bg">
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
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Professional timeline showcasing my growth and impact across diverse roles in software engineering and DevOps</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
      <div className="flex flex-col items-center flex-shrink-0 w-12">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg z-10 mt-1 ring-2 ring-offset-2 ring-offset-navy-900 transition-all duration-300 hover:scale-110"
          style={{ background: `${exp.color}22`, borderColor: exp.color, color: exp.color, ringColor: `${exp.color}40` }}
        >
          <HiBriefcase size={20} />
        </div>
        {!isLast && (
          <div className="flex-1 w-0.5 mt-4 mb-4"
            style={{ background: `linear-gradient(to bottom, ${exp.color}60, ${exp.color}10)` }} />
        )}
      </div>

      <div
        className="flex-1 rounded-2xl p-7 mb-4 transition-all duration-300 hover:shadow-2xl border backdrop-blur-md group"
        style={{ 
          background: `${exp.color}08`, 
          borderColor: `${exp.color}25`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${exp.color}40`
          e.currentTarget.style.background = `${exp.color}12`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${exp.color}25`
          e.currentTarget.style.background = `${exp.color}08`
        }}
      >
        {exp.current && (
          <span
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold mb-4 ring-1 ring-offset-1"
            style={{ 
              background: `${exp.color}20`, 
              color: `${exp.color}ff`,
              ringColor: `${exp.color}40`,
              ringOffsetColor: `${exp.color}08`
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
            Currently Here
          </span>
        )}

        <h3 className="font-heading font-bold text-white text-xl leading-tight mb-1">{exp.role}</h3>
        <div className="flex items-center gap-2 mb-3">
          <p className="font-semibold text-base transition-colors duration-300 group-hover:text-white" style={{ color: exp.color }}>{exp.company}</p>
          {exp.website && (
            <a
              href={exp.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                boxShadow: `0 2px 8px ${exp.color}40`
              }}
              title="Visit company website"
            >
              <span>Visit</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-5 text-xs mb-6">
          <span className="flex items-center gap-2 text-gray-300 font-medium">
            <FaCalendarAlt size={12} style={{ color: exp.color }} />
            {exp.period}
          </span>
          <span className="flex items-center gap-2 text-gray-300 font-medium">
            <FaMapMarkerAlt size={12} style={{ color: exp.color }} />
            {exp.location}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ring-1 ring-offset-1" style={{ backgroundColor: exp.color, ringColor: `${exp.color}30` }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {exp.tags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="text-xs px-3 py-1.5 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg border cursor-default inline-flex items-center gap-1"
              style={{ 
                background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                borderColor: `${exp.color}88`,
                boxShadow: `0 4px 12px ${exp.color}40`
              }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }} />
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
