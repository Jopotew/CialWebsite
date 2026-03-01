import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CialWebsite/', // Reemplaza 'CialWebsite' con el nombre exacto de tu repositorio
})