import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 transition-shadow duration-300"
          aria-label="Back to top"
        >
          <HiArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
