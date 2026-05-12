import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const expertise = [
  { emoji: '🌐', title: 'Web Development', tags: ['MERN Stack', 'Angular', 'Spring Boot', 'React.js'] },
  { emoji: '📱', title: 'Mobile Development', tags: ['Android', 'React Native', 'Firebase', 'Kotlin'] },
  { emoji: '☁️', title: 'Cloud Computing', tags: ['AWS EC2', 'S3', 'RDS', 'Google Cloud'] },
  { emoji: '🔧', title: 'DevOps & CI/CD', tags: ['Docker', 'Jenkins', 'Kubernetes', 'Terraform'] },
  { emoji: '🤖', title: 'AI & Automation', tags: ['TensorFlow', 'Python', 'LSTM', 'Selenium'] },
  { emoji: '🗄️', title: 'Database Management', tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'] },
]

const whyMe = [
  { icon: '⚡', text: 'End-to-end development from UI to cloud infrastructure' },
  { icon: '🎯', text: 'Clean, maintainable code with focus on performance' },
  { icon: '🤝', text: 'Strong communication and collaborative mindset' },
  { icon: '📈', text: 'Committed to continuous learning and improvement' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-2">Who I am</p>
          <h2 className="section-heading">
            About{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-3xl blur-2xl opacity-20" />
              <div className="relative p-0.5 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-2xl">
                <img
                  src={import.meta.env.BASE_URL + 'images/uzair.HEIC'}
                  alt="Muhammad Uzair Saeedi"
                  className="w-72 h-85 object-cover rounded-2xl bg-navy-800"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass-card rounded-xl px-5 py-3 shadow-2xl">
                <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                <p className="font-heading font-bold text-white">1 Year</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-1">Muhammad Uzair Saeedi</h3>
            <p className="font-mono text-brand-cyan text-sm mb-6">
              Full Stack Developer · Mobile App Developer · DevOps Engineer
            </p>

            <div className="space-y-4 text-gray-400 text-[0.95rem] leading-relaxed mb-8">
              <p>
                I'm a DevOps Engineer and Full Stack Developer focused on building, automating, and
                scaling production-grade systems. My work centers on bridging development and operations —
                designing CI/CD pipelines, container orchestration, and cloud infrastructure that teams
                can ship on with confidence.
              </p>
              <p>
                From writing application code to architecting its entire deployment workflow, I own the
                full lifecycle. I work hands-on with Docker, Kubernetes, Jenkins, Terraform, Ansible,
                and AWS — delivering infrastructure that is automated, observable, and built to scale from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyMe.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-400 text-xs leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/muhammad-uzair-saeedi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-full text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:uzairsaeedi627@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <FaEnvelope /> Email Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Expertise grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-6 hover:border-brand-blue/25 transition-all duration-300"
            >
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h4 className="font-heading font-semibold text-white mb-3">{item.title}</h4>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-brand-blue/8 text-brand-blue/70 border border-brand-blue/15 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
