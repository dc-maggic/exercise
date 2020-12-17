const fs = require('fs');
const readline = require('readline');

const getFile = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
getFile.question(`请输入文件全名（包含格式）：`, file => {
    if (file.trim()) {
        console.log(`开始解析${file}`);
        try{
            const rl = readline.createInterface({
            input: fs.createReadStream(file),
            crlfDelay: Infinity
        });
        rl.on('line', (line) => {
            console.log(`文件中的每一行: ${line}`);
        });
        }catch(error){
            console.log(error)
        }
    } else {
        console.log('请不要逗我。。。')
    }
    getFile.close()
})