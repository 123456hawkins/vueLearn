// Object.getPrototypeOf方法返回参数对象的原型
var F = function () {}
var f = new F()
console.log(Object.getPrototypeOf(f) === F.prototype) //true

// Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。
var a = {}
var b = { x: 1 }
Object.setPrototypeOf(a, b)

Object.getPrototypeOf(a) === b // true
console.log(a.x) // 1

// Object.create()该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。
function Person(name, sex) {
  this.name = name
  this.sex = sex
}
Person.prototype.getNameAndSex = function () {
  return this.name + this.sex
}
var p1 = new Person('HAWKINS', 1)
console.log(p1)
p2 = Object.create(p1)
// 赋值p2的属性给p1
Object.assign(p2,p1)
console.log(p2)

const parent = {
  name: 'John',
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
};

const child = Object.create(parent);
child.name = 'Alice';

console.log(child.name); // 输出: "Alice"
child.sayHello(); // 输出: "Hello, Alice!"

// for...in检查一个属性是否存在
for(p in p2){
  console.log(p);
}

