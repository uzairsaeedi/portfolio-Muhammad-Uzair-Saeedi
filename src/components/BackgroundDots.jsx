import { useEffect, useRef } from 'react'

const COLORS = [
  [139, 92,  246], // violet
  [34,  211, 238], // cyan
  [180, 150, 255], // lavender
]

export default function BackgroundDots() {
  const canvasRef = useRef(null)
  const mouse     = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let pts = []

    const init = () => {
      pts = []
      const n = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 130)
      for (let i = 0; i < n; i++) {
        const ci = Math.random() < 0.5 ? 0 : Math.random() < 0.65 ? 1 : 2
        pts.push({
          x:     Math.random() * canvas.width,
          y:     Math.random() * canvas.height,
          r:     Math.random() * 1.4 + 0.8,
          vx:    (Math.random() - 0.5) * 0.14,
          vy:    (Math.random() - 0.5) * 0.14,
          base:  Math.random() * 0.35 + 0.35,
          phase: Math.random() * Math.PI * 2,
          spd:   Math.random() * 0.4  + 0.15,
          color: COLORS[ci],
        })
      }
    }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const draw = (ts) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const t  = ts / 1000
      const mx = mouse.current.x
      const my = mouse.current.y

      for (const p of pts) {
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < 16000) {
          const d = Math.sqrt(d2)
          const f = ((126 - d) / 126) * 0.4
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }

        p.x += p.vx
        p.y += p.vy
        if (p.x < -4) p.x = canvas.width  + 4
        if (p.x > canvas.width  + 4) p.x = -4
        if (p.y < -4) p.y = canvas.height + 4
        if (p.y > canvas.height + 4) p.y = -4

        const a = p.base * (0.55 + 0.45 * Math.sin(t * p.spd + p.phase))
        const [r, g, b] = p.color

        // outer glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.22})`
        ctx.fill()

        // mid glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.45})`
        ctx.fill()

        // bright core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(a * 1.6, 0.92)})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 3 }}
    />
  )
}
