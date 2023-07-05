/**
 * Object对象
 * JavaScript 原生提供Object对象（注意起首的O是大写），本章介绍该对象原生的各种方法。

JavaScript 的所有其他对象都继承自Object对象，即那些对象都是Object的实例。

Object对象的原生方法分成两类：Object本身的方法与Object的实例方法。
 */

// Object的对象方法,直接定义在Object对象的方法
Object.print=function(o){console.log(o);}

// Object的实例方法,定义在Object原型对象上的方法,它可以被Object实例直接使用。
Object.prototype.print=function(){
  console.log(this);
}

var obj=new Object()
obj.print()
var num=new Number()
console.log(obj instanceof Object);
console.log(num instanceof Number);


// keys()
var obj={
  p1:'111',
  p2:'222'
}
//返回键
console.log( Object.keys(obj));
console.log( Object.values(obj));

/**
 * Object的相关方法
 */
//1.valueOf方法的作用是返回一个对象的“值”，默认情况下返回对象本身。
var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3

// 2.toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。
var o1=new Object()
console.log(o1.toString());
console.log(Object.prototype.toString.call(2));//返回数据类型