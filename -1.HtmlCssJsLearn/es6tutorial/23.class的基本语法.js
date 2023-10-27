// 类的由来
// JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')'
}
var p = new Point(3, 4)
console.log(p.toString())

// 基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
// 上面的代码用 ES6 的class改写，就是下面这样。
class Point1 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  // Point类除了构造方法，还定义了一个toString()方法。注意，定义toString()方法的时候，前面不需要加上function这个关键字，
  // 直接把函数定义放进去了就可以了。另外，方法与方法之间不需要逗号分隔，加了会报错
  toString() {
    return '(' + this.x + ',' + this.y + ')'
  }
}

const p1 = new Point1(3, 4)
console.log(p1.toString())

// 构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面
class Point3 {
  constructor() {
    // ...
  }
  toString() {
    // ....
  }
  toValue() {
    // ....
  }
}
// 等同于
Point3.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
}

class B {}
const b = new B()

b.constructor === B.prototype.constructor // true

// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign()方法可以很方便地一次向类添加多个方法。
Object.assign(Point.prototype, {
  toString() {
    console.log('caonima')
  },
  toValue() {
    console.log('EAWF')
  },
})
const p4 = new Point(3, 3)
console.log(p4.toValue())

// 另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

// constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。
// class Point {
// }

// // 等同于
// class Point {
//   constructor() {}
// }

// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

// constructor()方法默认返回实例对象（即this），完全可以指定返回另外一个对象
class Foo {
  constructor() {
    return Object.create(null)
  }
}
const f = new Foo()
console.log(f)

// 类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
console.log(new Point1(2, 5)) //返回Point1 { x: 2, y: 5 }
const p5 = new Point1(2, 3)
console.log(p5.hasOwnProperty('x'), p5.hasOwnProperty('y')) //true
console.log(p5.hasOwnProperty('toString')) //false  因为继承了Point的实例对象
console.log(p5.__proto__.hasOwnProperty('toString')) //true

// 实例属性的新写法
// ES2022 为类的实例属性，又规定了一种新写法。实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。
// 老写法
class IncreaseCounter {
  constructor() {
    this._count = 0
  }
  get value() {
    console.log('get current value')
    return this._count
  }
  increment() {
    this._count++
  }
}
// 新写法
class IncreaseCounter1 {
  _count = 0
  get value() {
    console.log('get current value')
    return this._count
  }
  increment() {
    this._count++
  }
}
// 这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。

// 取值函数（getter）和存值函数（setter
// 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为
class MyClass {
  constructor(prop) {
    this.prop = prop
  }
  get prop() {
    console.log('get')
    return 'getter'
  }
  set prop(value) {
    console.log('setter:', value)
  }
}
const mc = new MyClass(1)
console.log(mc.prop)
console.log((mc.prop = 1))

// 与函数一样，类也可以使用表达式的形式定义。

// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Foo2 {
  static staticMethod() {
    return 'hello'
  }
  // 静态方法可以与非静态方法重名。
  // staticMethod() {
  //   return 'hello'
  // }
}
const f3 = new Foo2()
try {
  console.log(f3.staticMethod()) //TypeError: f3.staticMethod is not a function
} catch (error) {
  console.log(error)
}
