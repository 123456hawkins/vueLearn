// Object表示所有数据类型的元类型
let a:Object=123
let a1:Object='123'
let a2:Object=true
let a3:Object=Symbol()
let a4:Object=new Map()

// object表示除了基本数据类型以外的类型
// let b:Object=123//报错
// let b1:Object='123'//报错
// let b2:Object=true//报错
let b:object=[]//正确
let b1:object={}//正确
let b2:object=()=>123//正确

// 空对象
let c:{}
// 等价于
let c1=new Object