/**
 * 尝试手写实现Promise: all resolve race reject方法
 */

function isFunction(check) {
  return (typeof check === 'function' || Object.prototype.toString.call(check) === '[object Function]')
}

function isObject(check) {
  return check === Object(check)
}

// promise 的三种状态
const State = {
  PENDING: Symbol.for('pending'),
  FULFILLED: Symbol.for('fulfilled'),
  REJECTED: Symbol.for('rejected')
}

/**
 * this需要绑定指向Promise实例
 * @param {State} state 
 */
function changeState(state) {
  if (this.state === state) {
    throw new Error('不能迁移至相同状态')
  }
  if (state === State.PENDING) {
    throw new Error('不允许迁移至Pending状态')
  }
  if (this.state === State.FULFILLED || this.state === State.REJECTED) {
    throw new Error('不能迁移至其他任何状态')
  }
  this.state = state
}


function fulfill(value) {
  try {
    changeState.call(this, State.FULFILLED)
    this.value = value
    // 当状态改变时，需要遍历执行队列中的任务
    this.fulfillQueue.forEach(function (fn) { fn() })
  } catch (e) { }
}

function reject(reason) {
  try {
    changeState.call(this, State.REJECTED)
    this.reason = reason
    // 当状态改变时，需要遍历执行队列中的任务
    this.rejectQueue.forEach(function (fn) { fn() })
  } catch (e) { }
}

/**
 * Promise解决过程
 * @param {Promise} promise2 
 * @param {value} x 
 */
function resolve(promise2, x) {
  if (promise2 === x) {
    // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
    reject.call(promise2, new TypeError('x 与 promise2 不能相等'))
  } else if (x && x instanceof Promise) {
    if (x.state === State.PENDING) {
      // 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
      x.then(function (value) {
        resolve(promise2, value)
      }, function (reason) {
        reject.call(promise2, reason)
      })
    } else if (x.state === State.FULFILLED) {
      // 如果 x 处于执行态，用相同的值执行 promise
      resolve(promise2, x.value)
    } else {
      // 如果 x 处于拒绝态，用相同的据因拒绝 promise
      reject.call(promise2, x.reason)
    }
  } else if (isObject(x) || isFunction(x)) {
    // x 为对象或函数时
    // 由于不允许调用多次，采用一个变量记录是否已经被调用过
    let called = false
    try {
      // 把 `x.then` 赋值给 then 
      const then = x.then

      // 如果then是个函数
      if (isFunction(then)) {

        then.call(x, function (y) {
          // resolvePromise
          if (!called) {
            called = true
            resolve(promise2, y)
          }
        }, function (r) {
          // resolvePromise
          if (!called) {
            called = true
            reject.call(promise2, r)
          }
        })

      } else {
        // 如果不是函数
        fulfill.call(promise2, x)
      }
    } catch (e) {
      if (!called) {
        // 如果已经调用过则忽略
        // 如果取 `x.then` 的值时抛出错误 e ，则以 e 为据因拒绝 promise
        reject.call(promise2, e)
      }
    }
  } else {
    // 如果 x 不为对象或者函数
    fulfill.call(promise2, x)
  }
}

/**
 * Promise类
 */
function Promise(executor) {
  this.state = State.PENDING
  this.value = undefined
  this.reason = undefined

  // 保存异步执行的队列 { fulfill, reject }
  this.fulfillQueue = []
  this.rejectQueue = []

  if (isFunction(executor)) {
    try {
      executor(fulfill.bind(this), reject.bind(this))
    } catch (e) {
      reject.call(this, e)
    }
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const _self = this
  // promise2 必须成功执行并返回相同的值
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : function (v) { return v }
  // promise2 必须拒绝执行并返回相同的据因
  onRejected = isFunction(onRejected) ? onRejected : function (err) { throw err }

  const promise2 = new Promise(function () {
    if (_self.state === State.FULFILLED) {
      setTimeout(function () {
        try {
          // 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程
          const x = onFulfilled(_self.value)
          resolve(promise2, x)
        } catch (e) {
          // 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
          reject.call(promise2, e)
        }
      }, 0)
    } else if (_self.state === State.REJECTED) {
      setTimeout(function () {
        try {
          // 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程
          const x = onRejected(_self.reason)
          resolve(promise2, x)
        } catch (e) {
          // 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
          reject.call(promise2, e)
        }
      }, 0)
    } else {
      // 当还没执行时不可以被调用，那么需要将此保存起来，在后续状态改变后调用
      _self.fulfillQueue.push(function () {
        setTimeout(function () {
          try {
            // 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程
            const x = onFulfilled(_self.value)
            resolve(promise2, x)
          } catch (e) {
            // 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
            reject.call(promise2, e)
          }
        }, 0)
      })

      _self.rejectQueue.push(function () {
        setTimeout(function () {
          try {
            // 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程
            const x = onRejected(_self.reason)
            resolve(promise2, x)
          } catch (e) {
            // 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
            reject.call(promise2, e)
          }
        }, 0)
      })
    }
  })

  return promise2
}

Promise.resolve = function (value) {
  // 如果value是个Promise，那么直接返回
  if (value && value instanceof Promise) {
    return value
  }
  const promise = new Promise(function (resolve, reject) {
    if (isFunction(value.then)) {
      x.then(function(v) {
        resolve(v)
      }, function(e) {
        reject(e)
      })
    } else {
      resolve(value)
    }
  })
  return promise
}

Promise.reject = function (reason) {
  return new Promise(function (_, reject) {
    reject(reason)
  })
}

Promise.prototype.catch = function (callback) {
  return this.then(null, callback)
}

Promise.prototype.finally = function (callback) {
  return this.then(function(value) {
      return Promise.resolve(callback()).then(function() { return value })
  }, function (err) {
      return Promise.resolve(callback()).then(function() { throw err })
  })
}

Promise.all = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('param is not iterable')
  }
  return new Promise(function(resolve, reject) {
    const resultArr = []
    // 已处理计数
    let processCount = 0
    const processResultByIndex = function(result, i) {
      resultArr[i] = result
      // 已处理计数 + 1
      processCount += 1

      // 如果计数等于arr长度则代表已处理完毕，则执行resolve
      if (processCount === arr.length) {
        resolve(resultArr)
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (item && typeof item.then === 'function') {
        // is a promise or thenable
        item.then(function (value) {
          processResultByIndex(value, i)
        }, reject)
      } else {
        // normal value
        processResultByIndex(item, i)
      }
    }
  })
}

window.Promise = Promise

// module.exports = Promise