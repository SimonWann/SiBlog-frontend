import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import svgReader from './src/plugins/svgReader'
// import Inspect from 'vite-plugin-inspect'
import svgLoader from 'vite-svg-loader'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Inspect(),
    vue(),
    svgLoader()
  ],
  css: {
    preprocessorOptions: {
      sass: {
        
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@sass": path.resolve(__dirname, './src/assets/sass/base.sass'),
      "@components": path.resolve(__dirname, './src/components'),
      "@svg": path.resolve(__dirname, './src/assets/svg'),
      
    }
  }
})
