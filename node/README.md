### 可执行脚本
```json
// package.json
{
  "name": "node",
  "script": {
    "maggic": "node index.js"
  }
}
```

```
$ npm run maggic
```

### 命令行参数的原始写法
```json
// package.json
{
  "name": "node",
  "bin": {
    "maggic-cli": "index.js"
  }
}
```

```
$ maggic-cli
```

### 新建进程
通过 child_process 模块新建子进程