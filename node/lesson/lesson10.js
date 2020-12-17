// 使用 Node.js 读取文件

const fs = require('fs')

fs.readFile('sample.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// 同步的版本 fs.readFileSync()
/*
fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。

这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。

在这种情况下，更好的选择是使用流来读取文件的内容。
*/