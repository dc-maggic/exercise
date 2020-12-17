# npm 的相关知识

## 简介
软件包管理器。
可以用 yarn 替代。

## 安装
### 安装、更新全部
``` code
npm install
npm update
```
### 安装、更新、卸载单个
``` code
npm install <package-name>
npm update <package-name>
npm uninstall <package-name>
```
1. --save 安装并添加条目到 package.json 文件的 dependencies。
2. --save-dev 安装并添加条目到 package.json 文件的 devDependencies。

区别主要是，devDependencies 通常是开发的工具（例如测试的库），而 dependencies 则是与生产环境中的应用程序相关。

1. -g 全局安装，npm root -g 命令会告知其在计算机上的确切位置
2. 本地安装，在 node_module 文件夹下
### 运行任务
``` code
npm run <task-name>
```

## 如何使用或执行 npm 安装的软件包
若要在代码中使用它，则只需使用 require 将其导入到程序中：
``` code
const _ = require('lodash');
```
## 查看 npm 安装的软件包
``` code
npm list
```
## 安装 npm 包的旧版本
``` code
npm install <package-name>@<version>
```
## 将所有 Node.js 依赖包更新到最新版本
若要发觉软件包的新版本，则运行 npm outdated.
若要将所有软件包更新到新的主版本，则全局地安装 npm-check-updates 软件包.
## npm 依赖与开发依赖
开发依赖是仅用于开发的程序包，在生产环境中并不需要。 例如测试的软件包、webpack 或 Babel。

当投入生产环境时，如果输入 npm install 且该文件夹包含 package.json 文件时，则会安装它们，因为 npm 会假定这是开发部署。
## package.json 指南
文件是项目的清单。 它可以做很多完全互不相关的事情。 例如，它是用于工具的配置中心。 它也是 npm 和 yarn 存储所有已安装软件包的名称和版本的地方.
## package-lock.json
该文件旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制（即使软件包的维护者更新了软件包）。