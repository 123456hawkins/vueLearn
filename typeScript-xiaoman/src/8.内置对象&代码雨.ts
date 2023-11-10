// ecma的内置类型的定义
let num:Number=new Number(1)
let data:Date=new Date()
let reg:RegExp=new RegExp(/\w/)
let error:Error=new Error('错了')
let xhr:XMLHttpRequest=new XMLHttpRequest()


// DOM对象
let div:NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div')

// 其他内置对象
let local:Storage=localStorage
let lo:Location=location
let promise:Promise<string>=new Promise((r)=>r('hawkisn'))
let cookie:string=document.cookie