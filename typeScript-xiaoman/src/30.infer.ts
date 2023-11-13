// 定义一个类型，如果是数组类型就返回数组元素的类型，否则传入什么类型就返回什么类型

import { reverse } from "dns"

// infer 是一个关键字，主要用于在条件类型（Conditional Types）中引入类型变量，并使得 TypeScript 能够推断这个变量的具体类型。
type TYPE<T> = T extends Array<infer U> ? U : never
// type T = [string, number]
type uni = TYPE<boolean[]>//报错
// type uni = boolean
type correct = TYPE<string[]>
// type correct = string



type Arr = ['a', 'b', 'c', 'd']
type getFirst<T extends any[]> = T extends [infer first, ...any[]] ? first : []
type a = getFirst<Arr>
// type a = "a"
type delLast<T extends any[]> = T extends [...infer rest, unknown] ? rest : []
type b = delLast<Arr>
// type b = ["a", "b"]
console.log();

// infer递归
type reverseArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...reverseArr<rest>, First] : []
type ra = reverseArr<Arr>
// type ra = ["d", "c", "b", "a"]