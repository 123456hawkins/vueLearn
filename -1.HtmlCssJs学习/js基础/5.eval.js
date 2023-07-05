/***
 * eval命令
 * eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
 * 
 */
var a=0
eval('a=1')
console.log(a);

/**
 * 别名调用
 * 为了保证eval的别名不影响代码优化，JavaScript 的标准规定
 * 凡是使用别名执行eval，eval内部一律是全局作用域
 * 
 * 
 * eval的别名调用的形式五花八门，只要不是直接调用，都
 * 属于别名调用，因为引擎只能分辨eval()这一种形式是直接调用。
 * 作用域都是全局作用域。
 */
var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e('console.log(a)');
}

f() // 1