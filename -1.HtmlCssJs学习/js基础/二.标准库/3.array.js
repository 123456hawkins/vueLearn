/***
 * Array数组
 */
//创建数组
var arr=new Array(10)
var arr2=[1,2,3,4,5,6]
console.log(arr.length);
console.log(Array.isArray(arr2));
// 返回数组的字符串形式
console.log(arr2.toString());

// 插入元素
arr2.push('a')
console.log(arr2);
// 删除数组最后一个元素
arr2.pop()
console.log(arr2);
// 删除第一个元素并返回该元素
console.log(arr2.shift());
console.log(arr2);
// 接受多个参数添加到目标数组头部
arr2.unshift('a','b','c')
console.log(arr2);
// join以指定参数作为分割符号,所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。
var arr3=[1,2,3,4,5,6,7]

console.log(arr3.join(' ## ' ));

// concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。
console.log(arr2.concat(arr3));

// reverse方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。
console.log(arr3.reverse());

// slice()方法用于提取目标数组的一部分，返回一个新数组，'
// 原数组不变。
console.log(arr3.slice(0,3));

// splice()方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。
console.log(arr2.splice(0,4));

// sort()排序
console.log(arr3.sort());

// p()方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
var arrPlus=arr3.map(function(n){
  return n**3
})
console.log(arrPlus);

// forEach()方法与map()方法很相似，也是对数组的所有成员依次执行
// 参数函数。但是，forEach()方法不返回值，只用来操作数据。这就是说
// ，如果数组遍历的目的是为了得到返回值，那么使用map()方法，否则使
// 用forEach()方法。该函数同样接受三个参数：当前值、当前位置、整个数组

arr3.forEach(function(elem,index,array){
  console.log(elem,index);
  arr3[index]=elem*index
})
console.log(arr3);

// filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
var arrf=arr3.filter(function(elem){
  return(elem>3)
})
console.log(arrf);

// some()类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。
arr3.some(function (elem) {
  return elem>3//true
})

// reduce()方法和reduceRight()方法依次处理数组的每个成员，最终累计为一个值。
// [1, 2, 3, 4, 5].reduce(function (
//   a,   // 累积变量，必须
//   b,   // 当前变量，必须
//   i,   // 当前位置，可选
//   arr  // 原数组，可选
// ) {
console.log(arr3);
var num=arr3.reduce(function(a,b){
  console.log(a,b);
  return a+b
})
console.log(num);

// indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。lastIndexOf()返回最后一次出现
console.log(arr3.indexOf('3'));

//链式使用
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
// "tom@example.com"