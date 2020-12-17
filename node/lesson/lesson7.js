// 搭建 HTTP 服务器
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    console.log(req)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('content-language','zh-CN')
  res.end('hi\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://127.0.0.1:${port}/`)
})