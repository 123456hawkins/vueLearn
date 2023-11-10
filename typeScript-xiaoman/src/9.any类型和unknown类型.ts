// any类型和unknown类型
// 都属于top type
// 2.Object
// 3.Number String Boolean
// 4.number string boolean
// 5.never
// unknown只能赋值给自身或者any
// unknown无法读任何属性或者方法
// unknown比any更加安全
let a:any=[]
a=1
a='12312'
a=Symbol()