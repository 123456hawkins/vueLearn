/***
 * this可以用在构造函数之中，表示实例对象。
 * 除此之外，this还可以用在别的场合。但不管是什么场合，
 * this都有一个共同点：它总是返回一个对象
 * 
 * 
 * 
 */
var person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};
// his.name表示name属性所在的那个对象。
// 由于this.name是在describe方法中调用，
// 而describe方法所在的当前对象是person，
// 因此this指向person，this.name就是person.name。


/**
 * 实质
 * 
 */
var obj = { foo:  5 };
/**
 * 上面的代码将一个对象赋值给变量obj。JavaScript 引擎会先在内存里面，
 * 生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。也就是说，
 * 变量obj是一个地址（reference）。后面如果要读取obj.foo，引擎先从obj拿到
 * 内存地址，然后再从该地址读出原始的对象，返回它的foo属性。
 */
// 原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。
// {
//   foo: {
//     [[value]]: 5
//     [[writable]]: true
//     [[enumerable]]: true
//     [[configurable]]: true
//   }
// }


/**
 * 由于函数可以在不同的运行环境执行，所以需要有一种机制，
 * 能够在函数体内部获得当前的运行环境（context）。所以，
 * this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
 * 
 */
var f = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
  f: f,
  x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2

/**
 * 
 * 
 * 使用场合
 */

//1.全局环境，全局使用this，指的是顶层对象window
// function f1(){
//   console.log(this === window);//true
// }
// f1()

// 构造函数，this指的就是实例对象
var Obj=function(p){
  this.p=p
}

// 对象的方法，如果对象的方法中包含this，this的指向就是方法运行时所在的对象
// 该方法赋值给另一个对象，就会改变this的指向
var obj={
  foo:function(){
    console.log(this);
  }
}
obj.foo()//{ foo: [Function: foo] }

/**
 * 使用注意点
 */
//1.避免使用多层this
var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}
o.f1()

// 避免数组处理方法中的this
// 数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。

// 避免回调函数中用this


/***
 * 
 * 绑定this的方法
 * avaScript 提供了call、apply、bind这三个方法，来切换/固定this的指向
 * 
 */

// Function.prototype.call()
// 函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
var obj={}
var f=function(){
  return this//window
}
console.log( f.call(obj));//{}
// 上面代码中，全局环境运行函数f时，this指向全局环境（浏览器为window对象）；call方法可以改变this的指向，指定this指向对象obj，然后在对象obj的作用域中运行函数f。

// call的参数应该传入一个对象，如果参数为空、null和undefined、则默认传入全局对象
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456

// 如果call方法的参数是一个原始值，那么这个原始值会自动转为对应的包装对象，然后传入call方法
var f=function(){
  return this
}
f.call(5)//Number {[[PrimitiveValue]]: 5}

// call方法还可以接受多个参数，第一个为this指向的对象，后面的参数是函数调用时所需的参数
function add(a,b,c){
  return a+b+c
}
add.call(this,1,3,5)//9



// apply函数
// apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。

// 找出数组最大元素
var arr=[1,23,4,6,7]
Math.max.apply(null,a)




// bind函数////////////////////////////////
// bind()方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
var d = new Date();
d.getTime() // 1481869925657

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.
// 上面代码中，我们将d.getTime()方法赋给变量print，然后调用print()就报错了。这是因为getTime()方法内部的this，绑定Date对象的实例，赋给变量print以后，内部的this已经不指向Date对象的实例了。

// bind()方法可以解决这个问题。
var print = d.getTime.bind(d);
print() // 1481869925657




