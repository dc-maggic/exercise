// nodejs基于http插件，监听接口，返回数据
var http = require('http');
var server = http.createServer(function (req, res) {
    var body = '';
    req.on('data', function(data) {      // 接收客户端发送过来的数据， 也就是 xmlHttp.send(value);
        body += data;
    });

    req.on('end', function() {
        res.writeHeader(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'    //解决跨域问题
        });
        res.write("hello," + body);
        res.end();
    })
});
server.listen(8080, function () {
    console.log('server start at http://127.0.0.1:8080');
});