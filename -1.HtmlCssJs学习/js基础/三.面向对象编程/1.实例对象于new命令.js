/***
 * 实例对象与new命令
 * -prototype:原型
 * -__proto__:原型链
 * 
 * 从属关系：
 * prototype从属于函数，是函数的一个属性
 * __proto__是对象Object的一个属性:对象{}
 * 对象的__proto__保存这该对象的构造函数的prototype
 * 
 */
// 典型的面向对象编程语言（比如 C++ 和 Java），
// 都有“类”（class）这个概念。所谓“类”就是对象的模板，
// 对象就是“类”的实例。但是，JavaScript 语言的对象体系，
// 不是基于“类”的，而是基于构造函数（constructor）和原型链
// （prototype）。


var vehicle=function(){
  this.price=1000
}
// Vehicle就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。