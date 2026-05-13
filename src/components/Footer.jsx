import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

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

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-10">

          {/* Brand */}
          <div className="pb-8 sm:pb-0 border-b border-white/[0.06] sm:border-b-0 sm:pr-8 md:pr-0">
            <div className="font-heading font-bold text-2xl mb-2.5">
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Uzair</span>
              <span className="text-white">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[260px]">
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
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — 2-col grid on mobile, 1-col on md+ */}
          <div className="pt-8 sm:pt-0 pb-8 sm:pb-0 border-b border-white/[0.06] sm:border-b-0 sm:pl-4 md:pl-0">
            <h4 className="font-heading font-semibold text-white text-[11px] mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth
                    duration={500}
                    offset={-66}
                    className="text-gray-500 text-sm hover:text-brand-cyan cursor-pointer transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="hidden sm:block w-0 group-hover:w-3 h-px bg-brand-cyan transition-all duration-300 flex-shrink-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-8 sm:pt-0 sm:col-start-1 sm:col-span-2 md:col-start-auto md:col-span-1">
            <h4 className="font-heading font-semibold text-white text-[11px] mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-2 text-gray-500 text-sm mb-5">
              <p>
                <a
                  href="mailto:uzairsaeedi627@gmail.com"
                  className="hover:text-gray-300 transition-colors break-all"
                >
                  uzairsaeedi627@gmail.com
                </a>
              </p>
              <p>+92 333 0321627</p>
              <p>+92 319 5957277</p>
            </div>
            <a
              href={import.meta.env.BASE_URL + 'assets/MuhammadUzairSaeedi.pdf'}
              download
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 glass-card rounded-full text-brand-blue/80 hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-300"
            >
              Download Resume <span className="text-sm leading-none">→</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Muhammad Uzair Saeedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
