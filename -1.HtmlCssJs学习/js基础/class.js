// 声明构造函数
function Person(name,sex){
  this.name=name;
  this.sex=sex;
}

// 添加方法
Person.prototype.sayCao=function(){
  console.log('caonima');
}
// 实例化对象
var person1=new Person('hawkins',1)
var person2=new Person('hawkins2',0)

// 使用对象
console.log(person2);
person1.sayCao()

// 实现继承，使用extends来创建子类，使用super关键字引用父类的构造函数和方法
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

// 实例化继承对象

var xiaoli=new Student('AAA',0,25)
console.log(xiaoli);