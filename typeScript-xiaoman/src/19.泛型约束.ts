// 在类型后面跟一个extends 再跟一个约束的类型
// 不加extend会报错
function add<T extends number>(a:T,b:T){
  return a+b
}
console.log(add(1,2));

interface len{
  length:number
}
function fn<T extends len>(a:T){
  return a.length
}
console.log(fn('waefwe'));



// 
let obj={
  name:'hawkins',
  sex:'girl'
}
type Key=keyof typeof obj
function ob<T extends object,K extends keyof T>(obj:T,key:K){
  return obj[key]
}
console.log(ob(obj,'name'));

