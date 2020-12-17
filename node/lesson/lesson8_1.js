// 使用 Node.js 发送 HTTP 请求

/*
注意 hostname 这里不要加 https://
*/
const https = require('https')
const options = {
  hostname: 'www.douban.com',
  port: 443,
  path: 'photos/photo/2394663585/#image',
  method: 'GET'
}
// 判断是否分块传输
// https://pic4.zhimg.com/80/v2-906d6ac21cdfa69b74e0830a9cc2ae9f_1440w.jpg?source=1940ef5c
// curl -i --range 0-9 https://zhuanlan.zhihu.com/api/columns/zhihuadmin
// https://www.douban.com/photos/photo/2394663585/#image
const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)
  let chunk = [];
  res.on('data', d => {
    // process.stdout.write(d)
    process.stdout.write('1')
    process.stdout.write('\n')
    chunk.push(d)
  })
//   res.on('end', d => {
//       var body = Buffer.concat(chunk);
//       console.log(body)
//   })
})

req.on('error', error => {
  console.error(error)
})

// 使用 http.request() 时，必须始终调用 req.end() 来表示请求的结束，即使没有数据被写入请求主体。
req.end()