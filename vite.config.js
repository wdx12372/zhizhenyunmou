import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  // 部署子路径配置
  base: '/zhizhenyunmou/',
  
  plugins: [
    vue(),
    {
      name: 'html-csp',
      transformIndexHtml(html) {
        return html.replace(
          '</head>', 
          `<meta http-equiv="Content-Security-Policy" 
                 content="default-src 'self'; 
                          font-src 'self' data: https: fonts.gstatic.com cdnjs.cloudflare.com;
                          style-src 'self' 'unsafe-inline' https: fonts.googleapis.com cdnjs.cloudflare.com;
                          img-src 'self' data: https:;">
           </head>`
        )
      }
    }
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  
  // 构建配置
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // 禁用内联
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@fortawesome')) {
            return 'vendor-fontawesome'
          }
        }
      }
    }
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