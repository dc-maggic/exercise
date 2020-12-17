// lesson2 在 Node.js 中从命令行接收输入

// 从版本 7 开始，Node.js 提供了 readline 模块来执行以下操作：每次一行地从可读流（例如 process.stdin 流，在 Node.js 程序执行期间该流就是终端输入）获取输入。

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入> '
})

rl.prompt();
rl.on('line',line=>{
    switch(line.trim()){
        case 'hello':
            console.log('word!');
            break;
        default:
            console.log('你输入的是'+ line.trim())
            break;
    }
    rl.prompt()
}).on('close',()=>{
    console.log('886!');
    process.exit(0);
})