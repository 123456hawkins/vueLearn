/**
 * -prototype:原型
 * -__proto__:原型链
 * 
 * 从属关系：
 * prototype从属于函数，是函数的一个属性
 * __proto__是对象Object的一个属性:对象{}
 * 对象的__proto__保存这该对象的构造函数的prototype
 * 
 */
//构造函数的prototype
function Test(){
  this.a=1
}
console.log(Test.prototype);
Test.prototype.b=2
// 对象的__proto__
const test=new Test()
console.log(test.__proto__);

// 上面两者相等
console.log(test.__proto__===Test.prototype);

console.log(Test.prototype.__proto__);

// 最顶层的prototype没有__proto__
console.log(Object.prototype.__proto__);//null

Object.prototype.c=2

console.log(test);
/**
 * test{
 *    a:1, 
 *    __proto__:Test.prototype={
 *      b:2,
 *      __proto__:Object.prototype={
 *        c:3
 *        .......
 * }
 * }
 * }
 * 沿着原型链继承实现读取数据
 */
console.log(test.a);
console.log(test.b);
console.log(test.c);



/**
 * 
 * 
 * Function 和 Object 函数和对象
 * 
 */
// const Test=new Function()

console.log(Test.__proto__===Function.prototype);

console.log(Function.prototype===Function.__proto__);

console.log(Object.__proto__===Function.prototype);
console.log();
console.log(Object.prototype);
console.log(Object.__proto__);
console.log(typeof Object);


// 查看对象封闭空间内是否有属性

console.log(test.hasOwnProperty('c'));//false,C是继承来的
console.log('c' in test);//查看链上是否有该

console.log(test.constructor);//指向构造函数
function Test1(){
  this.a=1231231
}
test.constructor=Test1//更改构造函数
console.log(test.constructor);//

///////////////////////////////////////////////////
Person.prototype.sayHello = function() {
  console.log('Hello, ' + this.name);
};

var person1 = new Person('Alice');
person1.sayHello(); // 输出: Hello, Alice
/////////////////////////////////////////////
// 在上面的示例中，Person.prototype 是一个对象，它包含了 sayHello 方法。
// person1 是通过 Person 构造函数创建的一个实例对象，它的 __proto__ 属性指向了
//  Person.prototype。Person.prototype 的 __proto__ 属性指向了 Object.prototype，
//  而 Object.prototype 的 __proto__ 属性为 null，形成了原型链。