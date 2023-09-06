/**
 * Number对象是数值对应的包装对象，可以作为构造函数使用，
 * 也可以作为工具函数使用。
 * 
 */
var n =new Number(22)
console.log(n);
console.log(Number.POSITIVE_INFINITY);

(10).toString() // "10"
10.005.toFixed(2) // "10.01"
(10).toExponential()  // "1e+1"

(12.34).toPrecision(5) // "12.340"

// Number.prototype.toLocaleString()方法接受一个地区码作为参
// 数，返回一个字符串，表示当前数字在该地区的当地书写形式
(123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
// "一二三"

// 自定义方法，Number.prototype对象上面可以自定义方法，被Number的实例继承。
Number.prototype.add = function (x) {
  return this + x;
};

8['add'](2) // 10