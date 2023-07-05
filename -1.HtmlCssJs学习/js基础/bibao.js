/**
 * 闭包closure
 * 
 */
function f1(){
  var n=99
  // console.log(n2);//报错
  /**
   * 1.函数f2就在函数f1内部，这时f1内部的所有局部变量，
   * 对f2都是可见的。但是反过来就不行，f2内部的局部变量，
   * 对f1就是不可见的。这就是 JavaScript 语言特有的"链式作用域"
   * 结构（chain scope），子对象会一级一级地向上寻找所有父对象
   * 的变量。所以，父对象的所有变量，对子对象都是可见的，反之则
   * 不成立。
   */
  function f2(){
    // var n2=100
    console.log(n);
  }
  return f2
}
// 实现在函数作用域外访问到函数内数据
var result=f1()
result()

/**
 * 2.闭包的最大用处有两个，一个是可以读取外层函数内部的变量，
 * 另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境
 * 一直存在。
 */

function createIncrementor(start) {
  return function () {
    return start++;
  };
}
//闭包使得内部变量记住上一次调用时的运算结果
var inc = createIncrementor(5);
/**
 * 闭包（上例的inc）用到了外层变量（start），
 * 导致外层函数（createIncrementor）不能从内存释放。
 * 只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境
 * 也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。
 */
console.log(inc());// 5
console.log(inc() ); //6
console.log(inc() ); //7



/**
 * 3.闭包的用法：封装对象的私有属性和私有方法
 */

function Person(name){
  var _age;
  function setAge(n){
    _age=n
  }
  function getAge(n){
    return _age
  }
  return{
    name:name,
    getAge:getAge,
    setAge,setAge
  }
}
var p1=Person('hawkins')
p1.setAge(25)
console.log(p1.getAge()); 
console.log(p1._age);//undefined

/**
 * 外层函数每次运行，都会生成一个新的闭包，
 * 而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。
 * 因此不能滥用闭包，否则会造成网页的性能问题。
 */