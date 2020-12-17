// 使用 Node.js 发送 HTTP 请求

/*
注意 hostname 这里不要加 https://
*/
const https = require('https')
const options = {
  hostname: 'es6.ruanyifeng.com',
  port: 443,
  path: '/docs/promise.md',
  method: 'GET'
}
// 判断是否分块传输
// curl -i --range 0-9 https://es6.ruanyifeng.com/docs/promise.md

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}, 版本: ${ res.httpVersion}`)
  const headers = res.headers;
  for(let i of headers){
    console.log(i+':'+headers)
  }
  let chunk = [];
//   /README.md 接口就一个 chunk
// /docs/promise.md 接口有3个chunk 服务端设置了允许分块
  res.on('data', d => {
    process.stdout.write("hello, thank you, thank you very much!\n")
    chunk.push(d)
  })
  res.on('end', d => {
      console.log('end')
  })
})

req.on('error', error => {
  console.error(error)
})

// 使用 http.request() 时，必须始终调用 req.end() 来表示请求的结束，即使没有数据被写入请求主体。
req.end()