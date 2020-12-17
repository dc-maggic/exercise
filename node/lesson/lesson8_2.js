var http = require("http");
function generateChunk(index, response) {
    setTimeout(() => {
        if (index === 5) {
            response.write("end");
            response.end("</body></html>");
        } else {
            response.write(String(index))
        }
    }, index * 1000);
}


function handlerRequest(_request, response) {
    // response.setHeader("Content-Type", "text; charset=UTF-8");
    response.setHeader("Transfer-Encoding", "chunked");
    response.setHeader('Content-Type', 'text/plain');
    response.write("hi");
    let index = 0;
    while (index <= 5) {
        generateChunk(index, response);
        index++;
    }
}


const server = http.createServer(handlerRequest);
server.listen(3000);
console.log("server started at http://localhost:3000");