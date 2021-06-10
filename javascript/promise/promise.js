/**
 * 手写promise
 * https://www.ituring.com.cn/article/66566
 * https://promisesaplus.com/
 */
function isFunction(check) {
  return (typeof check === 'function' || Object.prototype.toString.call(check) === '[object Function]')
}

function isObject(check) {
  return check === Object(check)
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

function fulfill(value) {
  try {
    // 执行
    changeState.call(this, State.FULFILLED)
    this.value = value
    this.fulfillCallbackList.forEach(fn => fn())
  } catch (e) {
    // nothing to do
  }
}

function reject(reason) {
  try {
    changeState.call(this, State.REJECTED)
    this.reason = reason
    this.rejectCallbackList.forEach(fn => fn())
  } catch (e) {
    // nothing to do
  }
}

/**
 * resolve
 */
function resolve(promise, x) {
  if (promise === x) {
    reject.call(promise, new TypeError('promise 和 x 指向同一对象，拒绝执行'))
  } else if (x && x instanceof Promise) {
    if (x.isPending()) {
      // 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
      x.then(function (value) {
        resolve(promise, value)
      }, function (reason) {
        reject.call(promise, reason)
      })
    } else if (x.isFulfilled()) {
      // 如果 x 处于执行态，用相同的值执行 promise
      resolve(promise, x.value)
    } else {
      // 如果 x 处于拒绝态，用相同的据因拒绝 promise
      reject.call(promise, x.reason)
    }
  } else if (isObject(x) || isFunction(x)) {
    let called = false
    // 把x.then赋值给then
    try {
      let then = x.then

      if (isFunction(then)) {
        // 如果then是个函数
        then.call(x, function (y) {
          // resolvePromise
          if (!called) {
            called = true
            resolve(promise, y)
          }
        }, function (r) {
          // rejectPromise
          if (!called) {
            called = true
            reject.call(promise, r)
          }
        })
      } else {
        fulfill.call(promise, x)
      }
    } catch (e) {
      // 如果取x.then的值抛出错误e，则已e为原因拒绝promise
      if (!called) {
        // 如果在没有被调用过的前提下才会执行，否则会被忽略
        reject.call(promise, e)
      }
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    fulfill.call(promise, x)
  }
}

function Promise(executor) {
  this.state = State.PENDING

  // 任何合法的 JavaScript 值（包括undefined、thenable 或 promise）
  this.value = undefined

  // 被拒绝的原因
  this.reason = undefined

  // { fulfill, reject }
  this.fulfillCallbackList = []
  this.rejectCallbackList = []

  // 必须是一个函数
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
  // 如果onFulfilled 或者 onRejected 不是一个函数，则忽略
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : function (v) { return v }
  onRejected = isFunction(onRejected) ? onRejected : function (e) { throw e }

  // then 方法必须返回一个 promise 对象
  const promise2 = new Promise(function () {
    // 还处理Pending状态时则添加
    if (_self.isPending()) {
      _self.fulfillCallbackList.push(function () {
        // 模拟异步
        setTimeout(function () {
          try {
            const x = onFulfilled(_self.value)
            resolve(promise2, x)
          } catch (e) {
            reject.call(promise2, e)
          }
        }, 0)
      })

      _self.rejectCallbackList.push(function () {
        setTimeout(function () {
          try {
            const x = onRejected(_self.reason)
            resolve(promise2, x)
          } catch (e) {
            reject.call(promise2, e)
          }
        }, 0)
      })
    } else {

      setTimeout(function () {

        try {
          const fn = _self.isFulfilled() ? onFulfilled : onRejected
          const vr = _self.isFulfilled() ? _self.value : _self.reason
          resolve(promise2, fn(vr))
        } catch (e) {
          reject.call(promise2, e)
        }

      }, 0)
    }
  })
  return promise2
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

Promise.resolve = function(value){
  return new Promise(resolve => resolve(value));
}

Promise.reject = function(reason){
  return new Promise((resolve, reject) => reject(reason));
}


module.exports = Promise