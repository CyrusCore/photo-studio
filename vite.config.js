import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all IP addresses, including LAN and public addresses
    host: '0.0.0.0',
    // Allow the server to respond to requests for any hostnames
    allowedHosts: true,
  },
})
