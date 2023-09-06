/**
 * Date对象
 */
var today=new Date('2023/7/06')
console.log(today);

// Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。

console.log(Date.now());

// Date.parse方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。
console.log(Date.parse('Aug 9, 1995'));

console.log(today.valueOf());
console.log(today.toString());
console.log(today.toJSON);