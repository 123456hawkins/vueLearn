// 协变也叫鸭子类型
interface A2 {
  name: string
  sex: number
}
interface B2 {
  name: string
  sex: number
  id: string
}
let k: A2 = {
  name: 'hawkins',
  sex: 1
}
let j: B2 = {
  name: 'hawkins',
  sex: 1,
  id: '12312'
}
// 协变 子类型可以赋值给父类型
k = j
// j=k//报错

// 逆变
let fna = (params: A) => {

}
let fnb = (params: B) => {

}
// 一定是安全的
fnb = fna