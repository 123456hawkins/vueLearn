let arr: readonly [x:number,y:boolean,c?:string]=[2,true]

// 元组实际应用场景
let excel:[string,string,number][]=[
  ['hawkins','man',29],
  ['hawkins','man',29],
  ['hawkins','man',29]
]

// 去元组类型
type first=typeof arr[0]