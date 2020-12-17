const Stream = require('stream');

// 创建可读流
const readableStream = new Stream.Readable();
readableStream._read = () => { }

// 创建可写流
const writableStream = new Stream.Writable();
writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}
// process.stdin.pipe(writableStream)

// 从可读流中获取数据
readableStream.pipe(writableStream)
setTimeout(()=>{readableStream.push('hi!')},1000);
readableStream.push('ho!')

// 如何发送数据到可写流
writableStream.write('hey!\n')

// 使用信号通知已结束写入的可写流
// writableStream.end()