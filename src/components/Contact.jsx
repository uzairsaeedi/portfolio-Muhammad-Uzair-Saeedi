import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import { HiCheckCircle, HiMail } from 'react-icons/hi'

const socials = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-uzair-saeedi', label: 'LinkedIn', color: '#0077b5' },
  { Icon: FaGithub, href: 'https://www.github.com/uzairsaeedi', label: 'GitHub', color: '#ffffff' },
  { Icon: FaFacebook, href: 'https://www.facebook.com/muhammaduzairsaeedi/', label: 'Facebook', color: '#1877f2' },
]

const contactDetails = [
  { Icon: FaEnvelope, label: 'Email', value: 'uzairsaeedi627@gmail.com', href: 'mailto:uzairsaeedi627@gmail.com' },
  { Icon: FaPhone, label: 'Phone', value: '+92 333 0321627', href: 'tel:+923330321627' },
]

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xanjblwq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: `${form.fname} ${form.lname}`, email: form.email, message: form.message }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ fname: '', lname: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Let's talk</p>
          <h2 className="section-heading">
            Get In{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-3">Let's build something together</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-9">
              Have a project idea or want to discuss opportunities? I'm always open to new challenges. I'll respond within 24 hours.
            </p>

            <div className="space-y-4 mb-9">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 glass-card rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-blue" size={15} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                    <a href={href} className="text-gray-300 hover:text-white text-sm transition-colors">{value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-2.5">
                {socials.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:scale-110 transition-all duration-300"
                    onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = `${color}40` }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = '' }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {status === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center glass-card rounded-2xl p-12 border-green-500/20">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 15 }}>
                  <HiCheckCircle size={64} className="text-green-400 mb-4" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-brand-blue/15 text-brand-blue rounded-full text-sm hover:bg-brand-blue/25 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass-card rounded-2xl p-7 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" name="fname" value={form.fname} onChange={onChange} placeholder="John" />
                  <Field label="Last Name" name="lname" value={form.lname} onChange={onChange} placeholder="Doe" />
                </div>
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" />
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.07] transition-all resize-none"
                  />
                </div>
                {status === 'error' && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-xl text-sm hover:opacity-90 hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <HiMail size={16} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.07] transition-all"
      />
    </div>
  )
}
