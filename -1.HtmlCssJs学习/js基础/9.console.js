
/**
 * console的使用
 * console对象是 JavaScript 的原生对象，它有点像 Unix 系统的标准输出stdout和标准错误stderr，
 * 可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。
 * console.log方法支持以下占位符，不同类型的数据必须使用对应的占位符。
      %s 字符串
      %d 整数
      %i 整数
      %f 浮点数
      %o 对象的链接
      %c CSS 格式字符串(使用%c占位符时，对应的参数必须是 CSS 代码，
        用来对输出内容进行 CSS 渲染。)
 */
console.log('awefa');
console.log('%d',5+1,);
console.log(
  '%cThis text is styled!',
  'color: red; background: yellow; font-size: 24px;'
)

console.warn('caonima')

//输出table
var languages = [
  { name: "JavaScript", fileExtension: ".js" },
  { name: "TypeScript", fileExtension: ".ts" },
  { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);

// 计数器

function testcount(user){
  console.count()
  return 'hi'+user

}
testcount('hawkisn')
testcount('hawkisn')
testcount('hawkisn')

// dir用于检查对象内容，dirxml用于检查dom节点
console.dir({name:'hawkisn',sex:1,data:'big'})
console.dirxml({car:{user:{name:'hawkins',sex:1},time:1990},price:19999999})

// assert，只有当表达式为false的时候才会执行
console.assert(1+1<2,'数学完了')

// time 用于计时耗费时间
// console.time('初始化')
// var a1=new Array(1000000)
// for (let i = 0;i< a1.length; i++){
//   a1.push(i)
// }
// console.timeEnd('初始化')

// clear用于清除控制台
console.clear()

// trace显示当前执行代码在堆栈中的调用路径
console.trace(1+1)