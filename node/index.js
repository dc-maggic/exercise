#!/usr/bin/env node
var example = require('./example.js');
var name = process.argv[2]|| 'maggic';
console.log("Hello!let's try the example,",name);
// 实际上执行的是 node ./index tom ，对应的 process.argv 是 ['node', '/path/to/index', 'tom'] 。

// 子进程
var exec = require('child_process').exec;
var child = exec('echo hello ' + name, function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout)
});

console.log(example.x); // 5
console.log(example.addX(1)); // 6