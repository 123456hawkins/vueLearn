// 装饰器decorator
// 1.类装饰器 ClassDecorator
// 2.属性装饰器 PropertyDecorator
// 3.参数装饰器 ParameterDecorator
// 4.方法装饰器 MethodDecorator
// 5.装饰器工厂

// 类装饰器
// const Base:ClassDecorator=(target)=>{
//   // target是传入类的构造函数
//   console.log(target);
//   // 拿到构造函数就可以不用管这个类给这个类添加属性和方法
//   target.prototype.__name='hawkins'
//   target.prototype.fn=()=>{
//     console.log('caonima');

//   }
// }
import axios from 'axios'
import 'reflect-metadata'
// 装饰器工厂，也叫函数闭包
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    // target是传入类的构造函数
    console.log(target);
    // 拿到构造函数就可以不用管这个类给这个类添加属性和方法
    target.prototype.__name = name
    target.prototype.fn = () => {
      console.log('caonima');
    }
  }
  return fn
}

// 方法装饰器
const Get = (url: string) => {
  const fn: MethodDecorator = (target, _, descriptor: PropertyDescriptor) => {
    // console.log(target, key, descriptor);
    const key = Reflect.getMetadata('key', target)
    axios.get(url).then(res => {
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
  return fn
}

const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('key', 'result', target)
    console.log(target, key, index);//{} getList 0
  }
  return fn
}
const Hawkins: PropertyDecorator = (target, key) => {
  console.log(target, key);

}
@Base('hawkins')
class Http {
  // 属性装饰器
  @Hawkins
  hawkins: string
  constructor() {
    this.hawkins = 'hawkins'
  }
  // 函数装饰器
  @Get('https://cloud.baidu.com/doc/SUGAR/s/xldn075st')
  getList(@Result() data: any) {//参数装饰器 现在就不用再写data.result
    console.log(data);

  }
  // @Post()
  create() {

  }
}
const http = new Http() as any
// console.log(http.__name);
http.fn()
http.getList()