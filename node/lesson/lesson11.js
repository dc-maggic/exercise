// 使用 Node.js 写入文件
const fs = require('fs')

const content = '一些内容'

// fs.writeFile fs.writeFileSync()
fs.writeFile('text.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //文件写入成功。
})


// 追加内容
// fs.appendFile() fs.appendFileSync()
fs.appendFile('text.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //完成！
})

/*
所有这些方法都是在将全部内容写入文件之后才会将控制权返回给程序（在异步的版本中，这意味着执行回调）。

在这种情况下，更好的选择是使用流写入文件的内容。
*/