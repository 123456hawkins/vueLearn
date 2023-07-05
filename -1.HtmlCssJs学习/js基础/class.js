// 声明构造函数
function Person(name,sex){
  this.name=name;
  this.sex=sex;
}

// 添加方法到原型链上
Person.prototype.sayCao=function(){
  console.log('caonima');
}
// 实例化对象
var person1=new Person('hawkins',1)
var person2=new Person('hawkins2',0)

// 使用对象
console.log(person2);
person1.sayCao()

// 实现继承方式一，使用extends来创建子类，使用super关键字引用父类的构造函数和方法
class Student extends Person{
  constructor(name,sex,age){
    // this.name=name;
    // this.sex=sex;
    super(name,sex)
    this.age=age;
  }
  sayHaHa(){
    console.log('hahahahhahah');
  }
}

// 实现继承方式二，使用call方法调用父类构造函数，并使用object.create方法来设置子类的原型链

// 定义子类
function Worker(name,sex,knife){
  // 调用父类的构造函数
  Person.call(this,name,sex)
  this.knife=knife
}

// 设置子类的原型链
Worker.prototype=Object.create(Person.prototype)
Worker.prototype.constructor=Worker

// 子类的方法
Worker.prototype.run=function(){
  console.log('running');
}


var w1=new Worker('hawkins',1,'GUN')
console.log(w1);

/**
 * 关于原型链的说明
 * 
 * 
1.原型（Prototype）：每个JavaScript对象（除了 null）都有一个内部
属性 [[Prototype]]，它指向其原型对象。原型对象可以是另一个对象或
 null。

2.构造函数（Constructor）：构造函数是用于创建对象的函数。
构造函数本身也是一个对象，它有一个特殊的属性 prototype，
它指向新创建对象的原型。

3.实例对象（Instance）：通过使用 new 关键字和构造函数，
我们可以创建一个实例对象。实例对象继承了构造函数的原型。

4.属性查找（Property Lookup）：当我们访问一个对象的属性时，
JavaScript会首先查找对象本身是否有该属性。如果没有，它会继续
在原型链上查找，直到找到属性或到达原型链的末尾（即原型为 null）
为止。

5.继承（Inheritance）：通过原型链，对象可以继承其原型对象的属性
和方法。当我们在对象上调用一个方法时，如果对象本身没有该方法，
JavaScript会沿着原型链查找并执行找到的方法
 */







// // 实例化继承对象
// var xiaoli=new Student('AAA',0,25)
// console.log(xiaoli);

// // for遍历字段
// for(var i in xiaoli){
//   console.log(i);
//   console.log(xiaoli[i]);
// }
