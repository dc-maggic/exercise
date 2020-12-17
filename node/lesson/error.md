# Node.js 中的错误处理

## creating exceptions
使用throw关键字创建异常：
```javascript
throw value
```
JavaScript一旦执行此行，就会停止常规程序流，并将控件保留到最近的异常处理程序。
通常，在客户端代码中，value可以是任何JavaScript值，包括字符串，数字或对象。
在Node.js中，我们不抛出字符串，而仅抛出Error对象。

## 错误对象
错误对象是一个对象，它是 Error 对象的实例，或者是扩展Error类模块中提供的Error类的对象：
```javascript
throw new Error('Ran out of coffee')
```

## 处理异常
异常处理程序是try/catch语句。
该try块中包含的代码行中引发的任何异常都在相应的块中处理catch：
```javascript
try{
    //
}catch(e){
}
```

## 捕获未捕获的异常
如果在程序执行过程中引发了未捕获的异常，则程序将崩溃。
要解决此问题，侦听该process对象上的 uncaughtException 事件：
```javascript
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})
```

## promise 的例外
使用promise可以链接不同的操作，并在最后处理错误：
```javascript
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err))
```

## async/await 的处理异常
```javascript
async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
}
```