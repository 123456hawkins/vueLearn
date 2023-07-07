/***
 * 实例对象与new命令
 * -prototype:原型(对象)
 * -__proto__:原型链(属性)非标准属性，现已被标准化为 [[Prototype]]）
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

// prototype 属性属于构造函数，而 __proto__ 属性属于对象实例。’
// 通过 __proto__ 属性，对象实例可以访问到构造函数的 prototype 属性，
// 进而实现原型继承

var vehicle=function(){
  this.price=1000
}
// Vehicle就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。

function Person(name) {
  this.name = name;
}

var p1=new Person('hawkisn')
console.log(p1);

/**
 * 使用new命令时，它后面的函数依次执行下面的步骤。

    创建一个空对象，作为将要返回的对象实例。
    将这个空对象的原型，指向构造函数的prototype属性。
    将这个空对象赋值给函数内部的this关键字。
    开始执行构造函数内部的代码。
 */


//new.target
// 函数内部可以使用new.target属性。如果当前函数是new命令调用，
// new.target指向当前函数，否则为undefined。
// function f(){

//   if (!new.target) {
//     throw new Error('请使用new命令调用')
//   }
// }
// f()


//希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法。
var person1 = {
  name: '张三',
  age: 38,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};
var person2=Object.create(person1)

console.log(person2.name);
console.log(person2.greeting);
person2.greeting()