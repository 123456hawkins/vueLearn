enum Color{
  // 当定义为1是,其他会自动增长,默认是从0开始
  red=1,
  green,
  blue
}
console.log(Color.red,Color.green,Color.blue);//1 2 3

const enum Types{
  success,
  fail
}
let code:number=0
if (code==Types.success) {
  console.log('success');
  
}

// 方向映射
enum Types1{
  success=456
}
let success:number=Types.success
let key= Types1[success]
console.log(success);//456
console.log(key);//success

