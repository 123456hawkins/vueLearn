function* gen(){
  yield Promise.resolve('hawkins')
  yield console.log('caonima');
  yield 
  
}
const man=gen()
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());


// 迭代器
let set:Set<number>=new Set([1.2,2,3,3,4,5])//天然去重,不能有重复元素
console.log(set);
let map:Map<any,any>=new Map()
let Arr=[1,2,3]
// 引用类型当key
map.set(Arr,'hawkisn')
console.log(map.get(Arr));

// 伪数组,没有数组的对应方法
function args(){
  console.log(arguments);
}
// let list=document.querySelectorAll('div')

// 迭代器
const each=(value:any)=>{
  let It:any=value[Symbol.iterator]()
  let next:any={done:false}
  while (!next.done) {
    next=It.next()
    if (!next.done) {
      console.log(next.value);
    }
  }
}
each(map)//[ [ 1, 2, 3 ], 'hawkisn' ]
each(set)

// 迭代器的语法糖 for of
// for of对象不可用 对象没有symbol
for(let value of map){
  console.log(value);
}

// 解构的底层原理是调用iterator

// 对象支持for of需要实现iteraotr
let obj2={
  max:5,
  current:0,
  // 实现iterator
  [Symbol.iterator](){
    return{
      max:this.max,
      current:this.current,
      next(){
        if (this.current==this.max) {
          return{
            value:undefined,
            done:true
          }
        }else{
          return{
            value:this.current++,
            done:false
          }
        }
      }
    }
  }
}
for(let val of obj2){
  console.log(val);
  
}