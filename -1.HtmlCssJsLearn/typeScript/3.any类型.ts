// any类型
let x1:any
x1=1;
x1='foo'
// 变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报
console.log(x1);
// 由于这个原因，应该尽量避免使用any类型，否则就失去了使用 TypeScript 的意义。


// 类型推断问题
// 对于开发者没有指定类型、TypeScript 必须自己推断类型的那些变量，如果无法推断出类型，TypeScript 就会认为该变量的类型是any。
function add(x,y){
  return x+y
}
// console.log(add(1,[1,2,3]));


// any类型除了关闭类型检查，还有一个很大的问题，就是它会“污染”其他变量。它可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错
let y:number
y=x1//此时y的类型是any
console.log(y);





// 为了解决any类型“污染”其他变量的问题，TypeScript 3.0 引入了unknown类型。它与any含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，
// 不像any那样自由，可以视为严格版的any。
let x2:unknown
x2=true
x2=1231
x2='hello world'
// 首先，unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
// let v1:number=x2//报错
// 其次，不能直接调用unknown类型变量的方法和属性。
let v1:unknown={foo:123}
// console.log(v1.foo);//报错

// unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错
console.log(x2===1);
// x2+1//报错

// 只有经过“类型缩小”，unknown类型变量才可以使用。所谓“类型缩小”，就是缩小unknown变量的类型范围，确保不会出错。
if(typeof x2 ==='string'){
  console.log(x2.length);
  
}
// 总之，unknown可以看作是更安全的any。一般来说，凡是需要设为any类型的地方，通常都应该优先考虑设为unknown类型。



// 为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript 还引入了“空类型”的概念，即该类型为空，不包含任何值
let x4:never
// 变量x的类型是never，就不可能赋给它任何值，否则都会报错

// never类型的一个重要特点是，可以赋值给任意其他类型。
function f():never{
  throw new Error('Error')
}
let v5:number=f()
// 上面示例中，函数f()会抛出错误，所以返回值类型可以写成never，即不可能返回任何值。各种其他类型的变量都可以赋值为f()的运行结果（never类型）。

// 为什么never类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript 就相应规定，
// 任何类型都包含了never类型。因此，never类型是任何其他类型所共有的，TypeScript 把这种情况称为“底层类型”（bottom type）。

// 总之，TypeScript 有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个。