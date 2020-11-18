(
  function (window) {

    /**
     * Promise Construtor
     * @param {Function} executor 
     */
    function Promise(executor) {

      // promise状态
      this.status = 'pending'
      // 存储数据结果
      this.data = undefined
      //每个元素的结构为 { onResolved(), onRejected() }
      this.callbacks = []
      
      function resolve(value) {
        if (this.status !== 'pending') {
          // 如果当前状态不为pending，则无法再次进行改变状态
          return
        }
        this.status = 'resolved'
        this.data = value
        if (this.callbacks.length > 0) {
          setTimeout(() => {
            this.callbacks.forEach(cb => {
              cb.onResolved(value)
            });
          })
        }
      }

      function reject(reason) {
        if (this.status !== 'pending') {
          return
        }
        this.status = 'rejected'
        this.data = reason
        if (this.callbacks.length > 0) {
          setTimeout(() => {
            this.callbacks.forEach(cb => {
              cb.onRejected(reason)
            })
          })
        }
      }

      // 调用执行器
      try {
        executor(resolve.bind(this), reject.bind(this))
      } catch (e) {
        reject(e)
      }
    }

    /**
     * then
     * @param {Function} onResolved 
     * @param {Function} onRejected 
     */
    Promise.prototype.then = function(onResolved, onRejected) {
      // 假设当前状态为pending，则保存毁掉函数
      this.callbacks.push({ onResolved, onRejected })
    }

    window.Promise = Promise
  }
)(window)