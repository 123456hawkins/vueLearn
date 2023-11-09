let a1:symbol=Symbol(1)
let a2:symbol=Symbol(2)
console.log(a1===a2);//false
// Symbol.for全局注册一个symbol,第二次就直接去找,没有就直接创建一个
console.log(Symbol.for('hawkins')===Symbol.for('hawkins'));//true

let obj={
  name:1,
  [a1]:111,
  [a2]:222
}
console.log(obj);
// for in不能读到symbol
for(let key in obj){
  console.log(key);
  
}
console.log(Object.getOwnPropertySymbols(obj));//读的到symbol
console.log(Reflect.ownKeys(obj));//全部都能读到

