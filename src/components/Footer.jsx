import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaFacebook, FaHeart } from 'react-icons/fa'

const quickLinks = ['Home', 'Portfolio', 'About', 'Experience', 'Services', 'Contact']

const socials = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-uzair-saeedi', label: 'LinkedIn' },
  { Icon: FaGithub, href: 'https://www.github.com/uzairsaeedi', label: 'GitHub' },
  { Icon: FaFacebook, href: 'https://www.facebook.com/muhammaduzairsaeedi/', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-2xl mb-3">
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Uzair</span>
              <span className="text-white">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Full Stack Developer · Mobile App Developer · DevOps Engineer
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth
                    duration={500}
                    offset={-66}
                    className="text-gray-500 text-sm hover:text-brand-cyan cursor-pointer transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-cyan transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2.5 text-gray-500 text-sm mb-6">
              <p><a href="mailto:uzairsaeedi627@gmail.com" className="hover:text-gray-300 transition-colors">uzairsaeedi627@gmail.com</a></p>
              <p>+92 333 0321627</p>
              <p>+92 319 5957277</p>
            </div>
            <a
              href={import.meta.env.BASE_URL + 'assets/MuhammadUzairSaeedi.pdf'}
              download
              className="inline-flex items-center gap-1.5 text-xs text-brand-blue/70 hover:text-brand-blue transition-colors"
            >
              Download Resume <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>

        <div className="pt-7 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Muhammad Uzair Saeedi. All rights reserved.</p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Built with <FaHeart size={10} className="text-red-500/70" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
