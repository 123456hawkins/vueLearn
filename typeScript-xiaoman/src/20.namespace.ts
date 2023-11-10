// 使用import或者export可以看成一个模块
export const x:number=2

// 或者使用namepace
// 如果定义两个重名的namespace会合并属性
namespace A{
  export let a=1
  export namespace C{
    export const c=2
  }
}
console.log(A.a);
console.log(A.C.c);

