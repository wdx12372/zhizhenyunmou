const fs = require('fs')
const path = require('path')

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