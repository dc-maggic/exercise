var x = 5;

var addX = function(value) {
  return value + x;
};

// 导出变量和方法
module.exports.x = x;
module.exports.addX = addX;