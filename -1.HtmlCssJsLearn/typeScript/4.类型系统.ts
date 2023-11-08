const x:boolean=true
const str:string='awfwef'
const n1:number=123123
const b1:bigint=123n
const s:symbol= Symbol()
const o:object={foo:123,bar:456}
const u:undefined=undefined
const n:null=null

// 注意，如果没有声明类型的变量，被赋值为undefined或null，
// 在关闭编译设置noImplicitAny和strictNullChecks时，它们的类型会被推断为any。
const a=undefined
const b=null
console.log(typeof(a));
console.log(typeof(b));

// 在 JavaScript 语言中，只有对象才有方法，原始类型的值本身没有方法。
// 这行代码之所以可以运行，就是因为在调用方法时，字符串会自动转为包装对象，charAt()方法其实是定义在包装对象上。
console.log('hello'.charAt(1));

// 五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象（即Symbol()和BigInt()不能作为构造函数使用），但是剩下三种可以。
const s1=new String('hello')
console.log(typeof s1);


// 由于包装对象的存在，导致每一个原始类型的值都有包装对象和字面量两种情况。
'hello' // 字面量
new String('hello') // 包装对象

// 大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。
let obj:Object
console.log(obj=true,obj=123);
// console.log(obj=undefined);

// 小写的object类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。
let obj1:object
console.log(obj1={forr:'awefawe'});


// undefined和null既是值，又是类型
// 作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为undefined或null
let age:number=24
// console.log(age=null,age=undefined);


// TypeScript 规定，单个值也是一种类型，称为“值类型”
let x3:'hello';
x3 = 'hello'; // 正确
// x3 = 'world'; // 报错

// TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。
const x4='https'
console.log(typeof(x4));//string

// 值类型可能会出现一些很奇怪的报错。

// 联合类型（union types）指的是多个类型组成的一个新类型，使用符号|表示。

// 联合类型A|B表示，任何一个类型只要属于A或B，就属于联合类型A|B。

let setting:true|false
let gender:'male'|'female'

let name1:string|null
name1=null

// 类型缩小
function printId(id:number|string){
  if (typeof id=='string') {
    console.log(id.toUpperCase());
  }else{
console.log(id);
  }
}

// 交叉类型的主要用途是表示对象的合成。
let obj3:{foo:string}&{bar:string}
console.log(obj3={foo:'awef',bar:'awefaw'});

// type命令用来定义一个类型的别名。
type Age=number
let age4:Age=1231

// 别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
if (Math.random()<0.5) {
  type Age=string
}

// JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型

let num:number=1
if (num>4) {
  type T=number;
  let v:T=5
}else{
  type T=string;
  let v:T='awefawe'
}


// 类型兼容
type T=number|string
let k:number=1
let v:T=k
console.log(k);//1

// TypeScript 为这种情况定义了一个专门术语。如果类型A的值可以赋值给类型B，那么类型A就称为类型B的子类型（subtype）。在上例中，类型number就是类型number|string的子类型。
