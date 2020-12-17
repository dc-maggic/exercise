# Buffer

## 什么是 buffer？
Buffer 是内存区域。它表示在 V8 JavaScript 引擎外部分配的固定大小的内存块（无法调整大小）。可以将 buffer 视为整数数组，每个整数代表一个数据字节。

## 为什么需要 buffer？
Buffer 被引入用以帮助开发者处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据。
Buffer 与流紧密相连。 当流处理器接收数据的速度快于其消化的速度时，则会将数据放入 buffer 中。

## 如何创建 buffer
1. Buffer.from(array)
2. Buffer.from(arrayBuffer[, byteOffset[, length]])
3. Buffer.from(buffer)
4. Buffer.from(string[, encoding])

以下会创建一个 1KB 的 buffer：

``` javascript
const buf = Buffer.alloc(1024)
//或
const buf = Buffer.allocUnsafe(1024)
```

1. alloc 创建的 Buffer 会被使用零进行初始化
2. allocUnsafe 创建的 Buffer 不会被初始化

## 使用 buffer
### 访问 buffer 的内容
Buffer（字节数组）可以像数组一样被访问
``` javascript
const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
```
这些数字是 Unicode 码，用于标识 buffer 位置中的字符
可以使用 toString() 方法打印 buffer 的全部内容
### 获取 buffer 的长度
使用 length 属性
### 迭代 buffer 的内容
``` javascript
const buf = Buffer.from('Hey!')
for (const item of buf) {
  console.log(item) //72 101 121 33
}
```
### 更改 buffer 的内容
可以使用 write() 方法将整个数据字符串写入 buffer
### 复制 buffer
使用 copy() 方法可以复制 buffer
``` javascript
const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(4) //分配 4 个字节。
buf.copy(bufcopy)
```
默认情况下，会复制整个 buffer。 另外的 3 个参数可以定义开始位置、结束位置、以及新的 buffer 长度
### 切片 buffer
如果要创建 buffer 的局部视图，则可以创建切片。 切片不是副本：原始 buffer 仍然是真正的来源。 如果那改变了，则切片也会改变。
使用 slice() 方法创建它。 第一个参数是起始位置，可以指定第二个参数作为结束位置
``` javascript
const buf = Buffer.from('Hey!')
buf.slice(0).toString() //Hey!
const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) //Ho
```