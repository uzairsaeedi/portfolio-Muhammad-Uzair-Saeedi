import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-static',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const staticDirs = ['images', 'assets']
          for (const dir of staticDirs) {
            if (req.url?.startsWith(`/${dir}/`)) {
              const filePath = path.join(process.cwd(), req.url.split('?')[0])
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase()
                res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
                fs.createReadStream(filePath).pipe(res)
                return
              }
            }
          }
          next()
        })
      },
    },
  ],
  base: '/',
})
