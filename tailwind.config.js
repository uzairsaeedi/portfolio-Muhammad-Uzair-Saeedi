/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',   // deepest dark — footer
          900: '#070d1c',   // main background
          800: '#0f172a',   // elevated surfaces / alternate sections
          700: '#1e293b',   // cards
          600: '#334155',   // borders
        },
        brand: {
          blue: '#8b5cf6',   // violet-500
          cyan: '#22d3ee',   // cyan-400
          violet: '#7c3aed', // violet-600
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 12s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        aurora: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-cyan':   '0 0 40px rgba(34, 211, 238, 0.15)',
      },
    },
  },
  plugins: [],
}
