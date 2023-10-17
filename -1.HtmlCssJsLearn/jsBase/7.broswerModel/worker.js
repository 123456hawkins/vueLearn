// worker内部可以加载其他脚本
// importScripts('xxx.js')
// worker内部需要有一个监听函数，监听message事件，self代表线程自身
self.addEventListener(
  'message',
  function (e) {
    var data = e.data
    switch (data.cmd) {
      case 'start':
        this.postMessage('线程开启了：' + data.msg)
        break
      case 'stop':
        this.postMessage('线程暂停了：' + data.msg)
        this.close()
        break

      default:
        this.postMessage('不清楚指令' + data.msg)
    }
    // data包含主线程发来的数据
    this.postMessage('You said' + e.data)
  },
  false
)
// 关闭worker
// this.close()