// 在 Node.js 中使用文件夹

const fs = require('fs');
const path = require('path');
const file = 'sample.txt';


// 检查文件夹是否存在
// 在当前文件夹
fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? '不存在' : '存在'}`);
});
// 可读。
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? '不可读' : '可读'}`);
});


// 创建新的文件夹
const folderName = './test';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("make it!")
  }else{
      console.log('exited')
  }
} catch (err) {
  console.error(err)
}
// 读取目录的内容
const folderPath = './';
console.log(fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
  }))
