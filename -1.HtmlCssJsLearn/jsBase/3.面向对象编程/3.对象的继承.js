// 通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。
// 同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费
function Cat(name,color){
  this.name=name;
  this.color=color;
  this.meme=function(){
    console.log('mememe');
  }
}
Cat.prototype.mao=1
var cat1=new Cat('hc','white')
var cat2=new Cat('hc2','white')
// 往原型对象上添加一个color属性
console.log(cat1.mao);
console.log(cat1.meme===cat2.meme);//false

/**
 * prototype属性的作用
 * JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，
 * 都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所
 * 有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系
 * 
 */

// 函数f默认具有prototype属性，指向一个对象。
function f(){

}
console.log(typeof f.prototype);//object

Cat.prototype.run=function(){
  console.log('cat is running');
}
cat1.run()

/**
 * 
 * 原型链
 * 所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，
 * 都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它
 * 也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：
 * 对象到原型，再到原型的原型……

如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype
，即Object构造函数的prototype属性。也就是说，所有对象都继承了Ob
ject.prototype的属性。这就是所有对象都有valueOf和toString方法的原因，因为这是从Object.prototype继承的。

那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype
的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链
的尽头就是null。
 */
console.log(Object.getPrototypeOf(Object.prototype));
var x={
  a:'1',
  b:'2'
}
console.log(x.prototype);
console.log(Object.getOwnPropertyDescriptor(x));



/***
 * 
 * 
 *constructor属性
 */
// prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
function p(){}
console.log(p.prototype.constructor===p); //true

// 由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。
function P(){

}
var p1=new P()
// p是构造函数P的实例对象，但是p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性。
console.log(p.constructor===P);//true
console.log(p.constructor===P.prototype.constructor);//true
console.log(p.hasOwnProperty('constructor'));//false
console.log('---------------');
// constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的
function F(){

}
var f=new F()
console.log(f.constructor===F);//true

// 另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例。
function Constr(){}
var x=new Constr()
var y=new x.constructor()
y instanceof Constr//true

// instanceof运算符
// instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
var v = new Vehicle();
v instanceof Vehicle // true

/***
 * 
 * 
 * 构造函数的继承
 * 
 */
function Sub(value){
  super.call(this)//调用父类的构造函数
  this.prop=value
}
// 让子类原型指向父类原型，这样子类就可以继承父类原型
Sub.prototype=Object.create(Super.prototype);
Sub.prototype.constructor=Sub
Sub.prototype.method = '....'

// 上面代码中，Sub.prototype是子类的原型，要将它赋值为Object.create(Super.prototype)，
// 而不是直接等于Super.prototype。否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。
// shape构造函数
function Shape(){
  this.x=0;
  this.y=0
}

Shape.prototype.move=function(x,y){
  this.x+=x
  this.y+=y
  console.log('shape moved!');
}

// 子类继承父类
function Rectangle(){
  Shape.call(this)
}
// 继承父类方法
Rectangle.prototype=Object.create(Shape.prototype)
Rectangle.prototype.constructor=Rectangle

/**
 * 多重继承
 */
function M1(){
  this.hello='hello'
}
function M2(){
  this.hello='world'
}
function M3(){
  M1.call(this)
  M2.call(this)
}
// 继承M1
M3.prototype=Object.create(M1.prototype)
// 继承链上加入M2
Object.assign(M.prototype,M2.prototype)

// 指定构造函数
M.prototype.constructor=M

