import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input: 'src/boogey.js'
    }
  },
  plugins: [svelte()],
})
