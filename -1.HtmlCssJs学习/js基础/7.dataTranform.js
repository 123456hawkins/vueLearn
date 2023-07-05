/**
 * 类型转换
 */

/**
 * 1.强制转换
 * Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。
 */
//Number
console.log(Number('awefaw'));
console.log(Number('21321 cat'));
console.log(parseInt('21321 cat'));//parseInt比number宽松的多
console.log(Number([1,2,3,4]));//nan

// String
console.log(String(12312));
console.log(String(true));
console.log(String(true));

// Boolean
console.log(Boolean(null));
console.log(Boolean([]));

/**
 * 自动转换
 */
console.log(123+'456');
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
//自动数值转换
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN