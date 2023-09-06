/**
 * JSON
 */
// 第一个参数是数组对象
console.log(JSON.stringify([{A:1,B:2},{C:3,D:4}]));

// 第二个参数
// 可以指定参数对象的哪些属性需要转成字符串。
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];
console.log(JSON.stringify(obj,selectedProperties));
// 还可以是一个函数，用来更改JSON.stringify()的返回值。
function f(key,value){
  if (typeof value==='number') {
    value=value+'wafaw'
  }
  return value
}
console.log(JSON.stringify({ a: 1, b: 2 },f));

// 第三个参数，用于增加返回的JSON字符串的可读性

console.log(JSON.stringify({A:1,B:2},null,'\t'));


/**
 * 参数对象的toJSON()方法
 */
// 如果参数对象有自定义的toJSON()方法，那么JSON.stringify()
// 会使用这个方法的返回值作为参数，而忽略原对象的其他属性。
var user={
  fname:'hawkins',
  lname:'qqqq',
  // 定义对象的get方法
  get fullName(){
    return this.fname+this.lname
  },
  toJSON:function(){
    return{
      fullName:this.fname+this.lname
    }
  }
}
console.log(JSON.stringify(user));

/**
 * 
 * JSON.parse()方法
 * 
 * JSON.parse()方法用于将 JSON 字符串转换成对应的值。
 */
JSON.parse('{}')
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
// 为了处理解析错误，可以将JSON.parse()方法放在try...catch代码块中。
try {
  JSON.parse("String")
} catch (error) {
  console.log(error);
}