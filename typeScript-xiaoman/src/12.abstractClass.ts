// 抽象类也叫基类
// abstract定义的方法不能实现
abstract class Js{
  name:string
  constructor(name?:string) {
    this.name=(name as string)
  }
  getName():string{
    return this.name
  }
  abstract init(name:string):void
}

// 但是继承抽象类要实现抽象方法
class React extends Js{
  constructor(){
    super()
  }
  init(name: string): void {
    this.name=name
      
  }
}
const react=new React()
react.init('hawkins')