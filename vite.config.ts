import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Quan trọng: để server bind mọi IP
    port: 5173,
    allowedHosts: ["manually-amazed-krill.ngrok-free.app"], // Thay bằng domain của bạn
    strictPort: true,
  }
})
