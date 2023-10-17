/**
 * 包装对象
 * 所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的
 * Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。
 */
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);