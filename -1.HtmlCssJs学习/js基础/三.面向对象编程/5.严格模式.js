// 启用严格模式
function strict(){
  'use strict';
  console.log('严格模式');
  // 严格模式下,只读属性不可写
  try {
    'abc'.length=500
  } catch (error) {
    console.log(error);
  }
}
strict()