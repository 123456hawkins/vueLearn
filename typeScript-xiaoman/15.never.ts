// never类型,最低的类型
type A =string&number//A就是never类型
function xm():never{
  throw new Error("WAEF")
}
function xm1():never{
  while (true) {
    
  }
}
type B='唱'|'跳'|'rap'
function kun(value:B){
  switch (value) {
    case '唱':
      
      break;
      case '跳':
      
      break;
      case 'rap':
      
      break;
  
    default:
      // 兜底类型,当typeB新增类型的时候就报错
      const error:never=value;
      break;
  }
}