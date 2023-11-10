let fn1=function(type:number|boolean):boolean{
  return !!type
}
let result=fn1(1)
console.log(result);


interface Man{
  name:string
  sex:number
}
interface Hakwins{
  height:number
}
const someone=(peo:Man&Hakwins):Man&Hakwins=>{
  peo={name:'hawkins',sex:1,height:175}
  return peo
}
console.log(someone)

// 类型断言
// 类型断言可以欺骗编译器防止报错
let fn5=function(num:number|string):void{
  console.log((num as string).length);
  
}
fn5('sfewf')