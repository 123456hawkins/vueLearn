// 对象混入
interface Name{
  name:string
}
interface Sex{
  sex:number
}
interface Age{
  age:number
}
let n1:Name={name:'hawkins'}
let s1:Sex={sex:1}
let g1:Age={age:22}
let Obj1=Object.assign(n1,s1,g1)
console.log(Obj1);


// 类的混入
class C{
  name:string
  getName():string{
    return this.name
  }
}
class D{
  sex:boolean
  changeSex():void{
    this.sex=!this.sex
  }
}
class E implements C,D{
  name:string
  sex:boolean
  getName:()=>string
  changeSex:()=>void
  constructor(name:string,sex:boolean){
    this.name=name
    this.sex=sex
  }
}
mixinClass(E,[C,D])
function mixinClass(currentClass:any,itemClassArr:any[]){
  itemClassArr.forEach(item=>{
    Object.getOwnPropertyNames(item.prototype).forEach(name=>{
      currentClass.prototype[name]=item.prototype[name]
    })
    Object.getOwnPropertyNames(item).forEach(name => {
      currentClass.prototype[name] = item[name]; 
    });
  })
}
let e=new E('hawkins',true)
console.log(e);

