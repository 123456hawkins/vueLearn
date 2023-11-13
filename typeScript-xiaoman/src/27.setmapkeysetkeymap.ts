let s3: Set<number> = new Set([1, 1, 2, 3, 4, 4, 5, 6, 7])//set的元素只能出现一次，有天然去重效果
console.log(s3, s3.has(0));


// Map的key可以是引用类型的(obj,array)
let obj4 = { name: 'hawkins' }
let m1: Map<object, number> = new Map()
m1.set(obj4, 3)
console.log(m1);


// weakmap 是弱引用，引用的对象不会被计入垃圾回收策略
// 弱引用的意思就是假如没有其他引用指向weakmap中的obj，这些对象可能会被垃圾回收
// weakmap和map 的区别是1.key只能是对象类型 2.没有for遍历
let weakmap: WeakMap<object, any> = new WeakMap()
weakmap.set(obj4, 'sfawefaw')
console.log(weakmap.get(obj4));

let weakset = new WeakSet([obj4])
console.log(weakset.has(obj4));
