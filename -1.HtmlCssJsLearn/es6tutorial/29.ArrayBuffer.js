// 二进制数组就是在这种背景下诞生的。它很像 C 语言的数组，允许开发者以数组下标的形式，直接操作内存，大大增强了 JavaScript 处理二进制数据的能力，使得开发者有可能通过 JavaScript 与操作系统的原生接口进行二进制通信。

// 二进制数组由三类对象组成。
// （1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。
// （2）TypedArray视图：共包括 9 种类型的视图，比如Uint8Array（无符号 8 位整数）数组视图, Int16Array（16 位整数）数组视图, Float32Array（32 位浮点数）数组视图等等。
// （3）DataView视图：可以自定义复合格式的视图，比如第一个字节是 Uint8（无符号 8 位整数）、第二、三个字节是 Int16（16 位整数）、第四个字节开始是 Float32（32 位浮点数）等等，此外还可以自定义字节序。
// 简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据

// 注意，二进制数组并不是真正的数组，而是类似数组的对象

// ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以指定格式解读二进制数据。
// ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。
const buf = new ArrayBuffer(32)
console.log(buf)
// 为了读写这段内容，需要为它指定视图。DataView视图的创建，需要提供ArrayBuffer对象实例作为参数。
const dataView = new DataView(buf)
console.log(dataView.getUint8(0)) //从头读取 8 位二进制数据，结果得到 0

// ArrayBuffer实例的byteLength属性，返回所分配的内存区域的字节长度
console.log(buf.byteLength)

// ArrayBuffer实例有一个slice方法，允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象。
const newBuffer = buf.slice(0, 3) //拷贝前三个字节
console.log(newBuffer)

// ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。
const buffer = new ArrayBuffer(8)
console.log(ArrayBuffer.isView(buffer))
// false

const v = new Int32Array(buffer)
// true
console.log(ArrayBuffer.isView(v))

// ArrayBuffer对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。
// ArrayBuffer有两种视图，一种是TypedArray视图，另一种是DataView视图。前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。
// 目前，TypedArray视图一共包括 9 种类型，每一种视图都是一种构造函数。

// Int8Array：8 位有符号整数，长度 1 个字节。
// Uint8Array：8 位无符号整数，长度 1 个字节。
// Uint8ClampedArray：8 位无符号整数，长度 1 个字节，溢出处理不同。
// Int16Array：16 位有符号整数，长度 2 个字节。
// Uint16Array：16 位无符号整数，长度 2 个字节。
// Int32Array：32 位有符号整数，长度 4 个字节。
// Uint32Array：32 位无符号整数，长度 4 个字节。
// Float32Array：32 位浮点数，长度 4 个字节。
// Float64Array：64 位浮点数，长度 8 个字节。

// 这 9 个构造函数生成的数组，统称为TypedArray视图。它们很像普通数组，都有length属性，都能用方括号运算符（[]）获取单个元素，所有数组的方法，在它们上面都能使用。
// 普通数组与 TypedArray 数组的差异主要在以下方面。

// TypedArray 数组的所有成员，都是同一种类型。
// TypedArray 数组的成员是连续的，不会有空位。
// TypedArray 数组成员的默认值为 0。比如，new Array(10)返回一个普通数组，里面没有任何成员，只是 10 个空位；new Uint8Array(10)返回一个 TypedArray 数组，里面 10 个成员都是 0。
// TypedArray 数组只是一层视图，本身不储存数据，它的数据都储存在底层的ArrayBuffer对象之中，要获取底层对象必须使用buffer属性。


// TypedArray 数组提供 9 种构造函数，用来生成相应类型的数组实例。
// （1）TypedArray(buffer, byteOffset=0, length?)
const b=new ArrayBuffer(8)
// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
const v1=new Int32Array(b)
// 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
const v2=new Uint8Array(b,2)
// 创建一个指向b的Int16视图，开始于字节2，长度为2
const v3=new Uint16Array(b,2,2)
console.log(v1);
console.log(v2);
console.log(v3);