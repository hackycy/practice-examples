/**
 * 手写promise
 * https://www.ituring.com.cn/article/66566
 * https://promisesaplus.com/
 */
(function (window) {

  /**
   * 检测是否是一个函数
   * @param {any} func 
   */
  function isFunction(func) {
    return typeof func === 'function' || Object.toString.call(func) === '[object Function]'
  }

  // Promise 状态
  const State = {
    // 处于等待态时，promise 需满足以下条件： 可以迁移至执行态或拒绝态
    PENDING: Symbol.for('pending'),

    // 处于执行态时，promise 需满足以下条件： 不能迁移至其他任何状态 | 必须拥有一个不可变的终值
    FULFILLED: Symbol.for('fulfilled'),

    // 处于拒绝态时，promise 需满足以下条件：不能迁移至其他任何状态 | 必须拥有一个不可变的据因
    REJECTED: Symbol.for('rejected')
  }

  function changeState(state) {
    if (this.state === state) {
      throw new Error('不能改变至相同的状态')
    }
    if (!this.isPending()) {
      throw new Error('处理执行态或者拒绝态时不可迁移至其它的状态')
    }
    if (state === State.PENDING) {
      throw new Error('只允许迁移至迁移至执行态或拒绝态')
    }
    this.state = state
  }

  function resolve(promise, x) {
    if (promise === x) {

    }
  }

  function reject(e) {

  }

  function Promise(executor) {
    this.state = State.PENDING

    // 任何合法的 JavaScript 值（包括undefined、thenable 或 promise）
    this.value = undefined

    // 被拒绝的原因
    this.reason = undefined

    // { fulfill, reject }
    this.queue = []

    // 必须是一个函数
    if (isFunction(executor)) {
      try {
        executor(resolve.bind(this), reject.bind(this))
      } catch (e) {
        reject.call(this, e)
      }
    }
  }

  Promise.prototype.then = function (onFulfilled, onRejected) {
    const _self = this
    // 如果onFulfilled 或者 onRejected 不是一个函数，则忽略
    const onfulfilled = isFunction(onFulfilled) ? onFulfilled : function (v) { return v }
    const onrejected = isFunction(onRejected) ? onRejected : function (e) { throw e }

    // then 方法必须返回一个 promise 对象
    const p = new Promise(function(resolve, reject) {

    })
    return p
  }

  /**
   * 判断函数状态
   */
  Promise.prototype.isPending = function () {
    return this.state === State.PENDING
  }

  Promise.prototype.isFulfilled = function () {
    return this.state === State.FULFILLED
  }

  Promise.prototype.isRejected = function () {
    return this.state === State.REJECTED
  }

  // register
  window.Promise = Promise

})(window)