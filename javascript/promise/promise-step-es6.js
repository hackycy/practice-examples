/**
 * 尝试手写实现Promise es6版
 */

function isFunction(check) {
  return (typeof check === 'function' || Object.prototype.toString.call(check) === '[object Function]')
}

function isObject(check) {
  return check === Object(check)
}

const State = {
  PENDING: Symbol.for('pending'),
  FULFILLED: Symbol.for('fulfilled'),
  REJECTED: Symbol.for('rejected')
}

function promiseResolve(promise2, x) {
  if (promise2 === x) {
    promise2.rejected(new TypeError('promise和x引用同一个对象'))
  } else if (x && x instanceof Promise) {
    if (x.state === State.PENDING) {
      x.then((v) => {
        promiseResolve(promise2, v)
      }, (e) => {
        promise2.rejected(e)
      })
    } else if (x.state === State.FULFILLED) {
      promiseResolve(promise2, x.value)
    } else {
      promise2.rejected(x.reason)
    }
  } else if (isObject(x) || isFunction(x)) {
    let called = false
    try {
      const then = x.then
      if (isFunction(then)) {

        then.call(x, (y) => {
          if (!called) {
            called = true
            promiseResolve(promise2, y)
          }
        }, (r) => {
          if (!called) {
            called = true
            promise2.rejected(r)
          }
        })
      } else {
        promise2.fulfilled(x)
      }
    } catch (e) {
      if (!called) {
        promise2.rejected(e)
      }
    }
  } else {
    promise2.fulfilled(x)
  }
}

class Promise {

  constructor(executor) {
    this.state = State.PENDING
    this.value = undefined
    this.reason = undefined

    this.fulfillQueue = []
    this.rejectQueue = []

    if (isFunction(executor)) {
      try {
        executor(this.fulfilled.bind(this), this.rejected.bind(this))
      } catch(e) {
        this.rejected(e)
      }
    }
  }

  fulfilled(value) {
    if (this.state === State.PENDING) {
      this.state = State.FULFILLED
      this.value = value
      this.fulfillQueue.forEach(fn => fn())
    }
  }

  rejected(reason) {
    if (this.state === State.PENDING) {
      this.state = State.REJECTED
      this.reason = reason
      this.rejectQueue.forEach(fn => fn())
    }
  }

  then(onfulfilled, onrejected) {
    const onFulfilled = isFunction(onfulfilled) ? onfulfilled : (v) => { return v }
    const onRejected = isFunction(onrejected) ? onrejected : (e) => { throw e }

    const promise2 = new Promise(() => {
      if (this.state === State.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            promiseResolve(promise2, x)
          } catch (e) {
            promise2.rejected(e)
          }
        }, 0)
      } else if (this.state === State.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            promiseResolve(promise2, x)
          } catch (e) {
            promise2.rejected(e)
          }
        }, 0)
      } else {
        this.fulfillQueue.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              promiseResolve(promise2, x)
            } catch (e) {
              promise2.rejected(e)
            }
          }, 0)
        })

        this.rejectQueue.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              promiseResolve(promise2, x)
            } catch (e) {
              promise2.rejected(e)
            }
          }, 0)
        })
      }
    })

    return promise2
  }

  // static resolve(value) {
  //   return new Promise((resolve) => {
  //     resolve(value)
  //   })
  // }

  // static reject(reason) {
  //   return new Promise((_, reject) => {
  //     reject(reason)
  //   })
  // }
}

module.exports = Promise
