// 函数的三种写法
function test1(){
  console.log('test1');
}
var test2=function(){
  console.log('test2');
}
var test3=new Function()

test1()
test2()
test3()

// 同名参数，最先匹配后边的元素
function f1(x,y){
  console.log(x,y);
}

f1(4,5)
f1(5)

/**
 * arguments 对象
 * 
 * 由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，
 * 可以在函数体内部读取所有参数。这就是arguments对象的由来。
 */

function f2(a){
  'use strict'; //开启严格模式，修改不影响赋值
  console.log(arguments[0]);
  // 正常情况下arguments可以修改
  arguments[1]=arguments[2]
  console.log(arguments[1]);
  console.log(arguments[2]);

}
f2(1,2,3)
