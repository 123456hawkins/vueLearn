// ?代表可选
function add(a:number=10,b:number=20,c?:number):number{
  return a+b
}
console.log(add(1,));//21

interface User{
  name:string
  age:number
}
function add2(user:User):User{
  return user
}
console.log(add2({name:'hawkins',age:123}));

// ts可以定义this的类型，在js中无法使用，必须是第一个参数定义this的类型
interface Obj{
  user:number[]
  add:(this:Obj,num:number)=>void
}
let obj:Obj={
  user:[1,2,3],
  add(this,num) {
      this.user.push(num)
  },
}
obj.add(2)
console.log(obj);

// 函数重载
let user:number[]=[1,2,3]
// 如果传入id就是单个查询
// function findNum(id:number):number[]{


// }
// // 如果没有传入东西就是查询全部
// function findNum():number[]{

  
// }
// // 如果传入数组就做添加
// function findNum(add:number[]):number[]{

  
// }
// 实现函数重载
function findNum(ids?:number|number[]):number[]{
  if (typeof ids =='number' ) {
    return user.filter(v=>v==ids)
  }else if(Array.isArray(ids)){
    user.push(...ids)
    return user
  }else{
    return user
  }
}
console.log(findNum());
console.log(findNum([4,5,6]));
