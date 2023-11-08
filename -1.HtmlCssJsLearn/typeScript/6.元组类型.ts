// 元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
const s:[string,string,boolean]=['wfw','wfawe',false]

let a1:number[]=[1]//数组
let a2:[number]=[1]//元组

let a=[1,true]//类型推断为number和Boolean

// 由于需要声明每个成员的类型，所以大多数情况下，元组的成员数量是有限的，从类型声明就可以明确知道，元组包含多少个成员，越界的成员会报错。
// 但是，使用扩展运算符（...），可以表示不限成员数量的元组。
type NameNums=[string,...number[]]
const a3:NameNums=['a',1,2,3]

// 如果不确定元组成员的类型和数量，可以写成下面这样
type Tuple=[...any[]]

// 元组可以通过方括号，读取成员类型。
type t1=NameNums[0]
let a5:t1='awefaw'

// 只读元组
type t=readonly [number,string]


// 这导致如果函数调用时，使用扩展运算符传入函数参数，可能发生参数数量与数组长度不匹配的报错。
