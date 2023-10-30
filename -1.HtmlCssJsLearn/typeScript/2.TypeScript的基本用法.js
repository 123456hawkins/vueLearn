// 1.类型声明
// TypeScript 代码最明显的特征，就是为 JavaScript 变量加上了类型声明
var foo;
function toStringType(num) {
    return String(num);
}
console.log(toStringType(123));
// let foo1:string=123//报错
// TypeScript 规定，变量只有赋值后才能使用，否则就会报错。
var x;
// console.log(x);//报错
// 2.类型推断
var foo3 = 123;
// foo3='hello'//报错
// 从这里可以看到，TypeScript 的设计思想是，类型声明是可选的，你可以加，也可以不加。即使不加类型声明，依然是有效的 TypeScript 代码，只是这时不能保证 TypeScript 会正确推断出类型。由于这个原因，所有 JavaScript 代码都是合法的 TypeScript 代码。
// JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码。所以，TypeScript 项目要想运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。
// TypeScript 官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。
// 因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。
