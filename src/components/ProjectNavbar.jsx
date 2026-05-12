import { useNavigate } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'

export default function ProjectNavbar() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <HiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>

          <button onClick={() => navigate('/')} className="font-heading font-bold text-xl group">
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Uzair
            </span>
            <span className="text-white">.</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
