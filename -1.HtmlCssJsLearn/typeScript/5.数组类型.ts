// TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员
let arr:number[]=[1,2,3,4]
let arr2:(number|string)[]

// 数组的类型推断
const arr1=[]//推断为any[]
// arr1.push(1)//报错

// JavaScript 规定，const命令声明的数组变量是可以改变成员的。
const arr3=[1,2]
arr3[1]=2
console.log(arr3);

// TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。
const arr4:readonly number[]=[1,2,3]
// arr是一个只读数组，删除、修改、新增数组成员都会报错。


// 多维数组
var multiArr:number[][]=[[1,2,3],[2,3,4]]