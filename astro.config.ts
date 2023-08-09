import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
// import viteReact from '@vitejs/plugin-react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // base: '/site-maintenance',
  // vite: {
  //   plugins: [viteReact({ babel: { plugins: ['typewind/babel'] } })],
  // },
})
