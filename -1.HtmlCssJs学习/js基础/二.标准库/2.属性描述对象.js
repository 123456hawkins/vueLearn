var o1={
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
// 1.Object.getOwnPropertyDescriptor()方法可以获取属性描述对象。
// 它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象
// 的某个属性名
console.log(Object.getOwnPropertyDescriptor(o1,'writable'));

// 2.Object.getOwnPropertyNames方法返回一个数组，
// 成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。
console.log(Object.getOwnPropertyNames(o1));


// 3.Object.defineProperty()方法允许通过属性描述对象，定义或修改一
// 个属性，然后返回修改后的对象

// Object.defineProperty()和Object.defineProperties()
// 参数里面的属性描述对象，writable、configurable、enumerable
// 这三个属性的默认值都为false。

// object：属性所在的对象
// propertyName：字符串，表示属性名
// attributesObject：属性描述对象
var obj=Object.defineProperty({},'p',{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});
obj.p=2
console.log(obj.p);//修改值不变

// 定义多个属性
var objM=Object.defineProperties({},{
  p1:{value:123,enumerable:true},
  p2:{value:33,enumerable:true},
  // 一旦定义了取值函数get（或存值函数set），就
  // 不能将writable属性设为true，或者同时定义value属性，否则会报错。
  p3:{get:function(){return this.p1+this.p2}},
},
{enumerable:true,
  configurable:true})
  // configurable(可配置性）返回一个布尔值，决定了是否可以修改属性
  //   描述对象。也就是说，configurable为false时，writable、enume
  //   rable和configurable都不能被修改了。
console.log(objM.p3);


/**
 * $$$存取器￥￥￥
 * 存值函数称为setter，使用属性描述对象的set属性；
 * 取值函数称为getter，使用属性描述对象的get属性。
 */
var obj2=Object.defineProperty({},'p',{
  get:function(){
    return 'getter'
  },
  set:function(value){
    console.log('setter'+value);
  }
})
console.log(obj2.p);
obj2.p=111
console.log(obj2.p);