const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   fs.readFile(__dirname + '/test.txt', (err, data) => {
//       console.log('1')
//     res.end(data)
//   })
// })

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/test.txt')
  console.log(1)
  stream.pipe(res)
})
server.listen(3000)