# 流

## 什么是流
流是为 Node.js 应用程序提供动力的基本概念之一。
它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。
例如，在传统的方式中，当告诉程序读取文件时，这会将文件从头到尾读入内存，然后进行处理。
使用流，则可以逐个片段地读取并处理（而无需全部保存在内存中）。

## 为什么是流
相对于使用其他的数据处理方法，流基本上提供了两个主要优点：
1. 内存效率: 无需加载大量的数据到内存中即可进行处理。
2. 时间效率: 当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始。

## 流的示例
1. 一个典型的例子是从磁盘读取文件。
使用 Node.js 的 fs 模块，可以读取文件，并在与 HTTP 服务器建立新连接时通过 HTTP 提供文件：
```javascript
const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)
```
readFile() 读取文件的全部内容，并在完成时调用回调函数。
回调中的 res.end(data) 会返回文件的内容给 HTTP 客户端。
如果文件很大，则该操作会花费较多的时间。
以下是使用流编写的相同内容：
```javascript
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
```
当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端，而不是等待直到文件被完全读取。

## pipe()
上面的示例使用了 stream.pipe(res) 这行代码：在文件流上调用 pipe() 方法。
该代码的作用是什么？ 它获取来源流，并将其通过管道传输到目标流。
在来源流上调用它，在该示例中，文件流通过管道传输到 HTTP 响应。
pipe() 方法的返回值是目标流，这是非常方便的事情，它使得可以链接多个 pipe() 调用

## 流驱动的 Node.js API
1. process.stdin 返回连接到 stdin 的流。
2. process.stdout 返回连接到 stdout 的流。
3. process.stderr 返回连接到 stderr 的流。
4. fs.createReadStream() 创建文件的可读流。
5. fs.createWriteStream() 创建到文件的可写流。
6. net.connect() 启动基于流的连接。
7. http.request() 返回 http.ClientRequest 类的实例，该实例是可写流。
8. zlib.createGzip() 使用 gzip（压缩算法）将数据压缩到流中。
9. zlib.createGunzip() 解压缩 gzip 流。
10. zlib.createDeflate() 使用 deflate（压缩算法）将数据压缩到流中。
11. zlib.createInflate() 解压缩 deflate 流。

## 不同类型的流
1. Readable: 可以通过管道读取、但不能通过管道写入的流（可以接收数据，但不能向其发送数据）。 当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止。
2. Writable: 可以通过管道写入、但不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
3. Duplex: 可以通过管道写入和读取的流，基本上相对于是可读流和可写流的组合。
4. Transform: 类似于双工流、但其输出是其输入的转换的转换流。

## 如何创建可读流

## 如何创建可写流

## 如何从可读流中获取数据

## 如何发送数据到可写流

## 使用信号通知已结束写入的可写流