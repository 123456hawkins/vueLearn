/**
 * array数组，数组本质上是一个object对象，存放这kv元素
 */

/**
 * 1.数组的定义
 */
//直接定义
var arr=['a','b','c']
// 先定义后赋值
var arr=[]
arr[0]='aaa'
arr[1]='aab'
arr[2]='aaa'
//任何类型的数据都能放入数组
var arr=[
  {a:1},
  [1,2,3],
  function(){
    return true
  }
]
/**
 * 箭头函数没有自己的 this 绑定：箭头函数没有自己的 this 绑定，
而是继承外围作用域的 this 值。这意味着箭头函数内部的 this 值
与外部上下文保持一致，而不是在函数被调用时动态确定
 */
arr.forEach((element,index,array)=>{
  console.log(element);//当前元素
  console.log(index);//索引值
  console.log(array);//输出原始数组
})
console.log(typeof(arr));//Object

//修改数组长度
arr.length=2
console.log(arr);//最左匹配，删掉了最后一个元素

//in运算符
console.log(2 in [1,2,3]);

/**
 * 类似数组的对象
 */
var obj={
  0:'a',
  1:'b',
  2:'c',
  length:3
}
obj[3]='e'
obj.length++
console.log(obj);
// 判断父类
obj instanceof Object