import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 复制字体文件到 dist
function copyFonts() {
  const sourceDir = path.resolve(__dirname, '../node_modules/@fortawesome/fontawesome-free/webfonts')
  const destDir = path.resolve(__dirname, '../dist/webfonts')
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  fs.readdirSync(sourceDir)
    .filter(file => file.endsWith('.woff2') || file.endsWith('.ttf'))
    .forEach(file => {
      fs.copyFileSync(
        path.join(sourceDir, file), 
        path.join(destDir, file)
      )
    })
}

copyFonts() 