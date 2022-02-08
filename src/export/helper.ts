const temp = require('temp')
const fs = require('fs-extra')

export function tmpDir() {
  return new Promise((resolve, reject) => {
    temp.mkdir('lia', function (err, tmpPath: string) {
      console.warn(err, tmpPath)
      if (err) reject(err)
      else resolve(tmpPath)
    })
  })
}

export function writeFile(filename: string, content: string) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, function (err) {
      if (err) reject(err)
      else resolve('ok')
    })
  })
}

export function filterHidden(src: string, dest: string) {
  const pattern = src.match(/\/\.[^/]+/g)

  console.warn(src)

  if (pattern === null) return true
  else if (pattern.length == 0) return true

  return false
}
