# Node.js 开发环境与生产环境的区别
Node.js 假定其始终运行在开发环境中。 可以通过设置 NODE_ENV=production 环境变量来向 Node.js 发出正在生产环境中运行的信号。
通常通过在 shell 中执行以下命令来完成：
```shell
export NODE_ENV=production
```
但最好将其放在的 shell 配置文件中（例如，使用 Bash shell 的 .bash_profile），否则当系统重启时，该设置不会被保留。
也可以通过将环境变量放在应用程序的初始化命令之前来应用它：
```javascript
NODE_ENV=production node app.js
```
此环境变量是一个约定，在外部库中也广泛使用。

设置环境为 production 通常可以确保：
1. 日志记录保持在最低水平
2. 发生更多的缓存级别以优化性能
例如，Express未使用的模板库Pug，如果NODE_ENV未设置为 production，则会以调试模式进行编译。Express视图在开发模式下按每个请求进行编译，而在生产环境中则将其缓存。
可以使用条件语句在不同的环境中执行代码：
```javascript
if (process.env.NODE_ENV === "development") {
  //...
}
if (process.env.NODE_ENV === "production") {
  //...
}
if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
  //...
})
```
例如，在Express应用中，可以使用它在每个环境中设置不同的错误处理程序：
```javascript
if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
})

if (process.env.NODE_ENV === "production") {
  app.use(express.errorHandler())
})
```