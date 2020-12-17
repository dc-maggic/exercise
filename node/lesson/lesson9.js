const fs = require('fs')

// 在 Node.js 中使用文件描述符
// 文件描述符是使用 fs 模块提供的 open() 方法打开文件后返回的
fs.open('sample.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
})
// 也可以使用 fs.openSync 方法打开文件，该方法会返回文件描述符（而不是在回调中提供）
try {
  const fd = fs.openSync('sample.txt', 'r')
} catch (err) {
  console.error(err)
}

// 文件属性
// 具体地说，使用 fs 模块提供的 stat() 方法知道文件信息。
// 同步的方法：
try {
  const stats = fs.statSync('sample.txt')
  console.log('同步：'+stats.size)
} catch (err) {
  console.error(err)
}
fs.stat('sample.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(
  stats.isFile(), 
  stats.isDirectory(),
  stats.isSymbolicLink(), 
  stats.size
  )
})

// Node.js 文件路径
const path = require('path')
const notes = 'sample.txt'
console.log(
path.dirname(notes), 
path.basename(notes), 
path.extname(notes) 
)