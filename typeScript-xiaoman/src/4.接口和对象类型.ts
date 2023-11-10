// 定义类型
interface Axxis{
  name:string
  age:number
}
// 遇到重名的interface会合到一块
interface Axxis{
  // 只读属性
  readonly id:number
  // ？代表可选
  sex?:number
  // 索引签名,可以使用任意lei类型
  [propName:string]:any
}
let a:Axxis={
  id:1,
  name:"hawkins",
  age:12,
  sex:1,
  c:1
}
// 继承
interface Bxxis extends Axxis{
  game:string
}

// 定义函数类型
interface Fn{
  (name:string):number[]
}
const fn:Fn=function(name:string){
  return [1]
}