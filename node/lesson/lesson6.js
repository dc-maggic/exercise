// Node.js 事件触发器
/*
emit 用于触发事件。
on 用于添加回调函数（会在事件被触发时执行）。
once(): 添加单次监听器。
removeListener() / off(): 从事件中移除事件监听器。
removeAllListeners(): 移除事件的所有监听器。

*/
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start', () => {
    console.log('开始')
  })
eventEmitter.emit('start')