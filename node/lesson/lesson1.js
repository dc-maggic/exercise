// lesson 使用 Node.js 输出到命令行

// 第一个参数是 node 命令的完整路径。

// 第二个参数是正被执行的文件的完整路径。

// 所有其他的参数从第三个位置开始。
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

/*
%s 会格式化变量为字符串
%d 会格式化变量为数字
%i 会格式化变量为其整数部分
%o 会格式化变量为对象
*/
console.log('我的%s已经%d岁', '猫', 2)

const x = 1
const y = 2
const z = 3
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)
const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

const function2 = () => console.trace()
const function1 = () => function2()
function1()

const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()