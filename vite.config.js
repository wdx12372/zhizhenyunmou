import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  // 部署子路径配置
  base: '/zhizhenyunmou/',
  
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  
  // 构建配置
  build: {
      outDir: 'dist'
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://bot.michaeltan.org/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Origin', 'http://bot.michaeltan.org/v1')
          })
        }
      },
      '/chat': {
        target: 'http://bot.michaeltan.org/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chat/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Origin', 'http://bot.michaeltan.org/')
          })
        }
      }
    }
  }
}) 