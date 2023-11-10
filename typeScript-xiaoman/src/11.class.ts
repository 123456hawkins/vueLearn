// private只能给内部使用,protected可以给内部和子类使用

interface Options {
  el: string | HTMLElement
}
interface VueCls {
  options: Options
  init(): void
}
interface Vnode {
  tag: string
  text?: string
  children?: Vnode[]
}
// 虚拟DOM简单版
class Dom {
  // 创建节点方法
  createElement(el: string) {
    return document.createElement(el)
  }
  // 填充文本方法
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  // 渲染函数
  protected render(data: Vnode): HTMLElement {
    let root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach(item => {
        let child = this.render(item);
        root.appendChild(child);
      });
    } else {
      this.setText(root, (data.text as string));
    }
    return root; // 返回创建的根元素
  }
}

// 对类进行约束
class Vue extends Dom implements VueCls {
  
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
  }
  // 静态方法表示可以从类上直接调用的方法,静态方法只能调用静态方法和静态属性,不能调用其他方法和属性
  static version(){
    return '1.9.0'
  }
  init(): void {
    let data: Vnode = {
      tag: 'div',
      text: 'father',
      children: [
        {
          tag: 'section',
          text: 'child1',
        },
        {
          tag: 'section',
          text: 'child2',
        },
      ],
    };
    let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
    if (app) {
      app.appendChild(this.render(data));
    }
  }
  
}
new Vue({
  el: '#app'
});

console.log(Vue.version());

class Ref{
  private _value:any
  constructor(value:any){
    this._value=value
  }
  get value(){
    return this._value+'avwef'
  }
  set value(newVal){
    this._value=newVal+'1'
  }
}
const r1=new Ref('waefa')
console.log(r1.value);
