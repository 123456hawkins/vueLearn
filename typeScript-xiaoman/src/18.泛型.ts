// 动态类型
function hawkins(a:number,b:number):Array<number>{
  return [a,b]
}
const arr=hawkins(2,3)
console.log(arr);
// 泛型
function fanxing<T>(a:T,b:T):Array<T>{
  return [a,b]
}
const arr2=fanxing(2,4)
const arr3=fanxing('2','13')

interface Data<T>{
  msg:T
}
let data:Data<string>={
  msg:'waefw'
}

function add<T=number,K=boolean>(a:T,b:K):Array<T|K>{
  return [a,b]
}
const arr4=add(5,false)
console.log(arr4);

// axios例子
const axios={
  get<T>(url:string):Promise<T>{
    return new Promise((resolve,reject)=>{
      let xhr:XMLHttpRequest=new XMLHttpRequest()
      xhr.open('GET',url)
      xhr.onreadystatechange=()=>{
        if (xhr.readyState==4&&xhr.status==200) {
          resolve(JSON.parse(xhr.responseText))
        }
      }
      xhr.send(null)
    })
  }
}
// 定义接口类型
interface Data2{
  message:string
  code:number
}
axios.get<Data2>('./data.json').then(res=>{console.log(res.code)})