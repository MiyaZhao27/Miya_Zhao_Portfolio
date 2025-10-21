// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Miya_Zhao_Portfolio/',   
  plugins: [
    react({
      babel: { plugins: ['babel-plugin-react-compiler'] }, 
    }),
  ],
})
