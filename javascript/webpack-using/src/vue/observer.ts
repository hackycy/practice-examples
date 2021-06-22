// import { Dep } from './dep'

/**
 * Define a reactive property on an Object.
 */
export function defineReactive(
  target: any,
  key: string,
  val: any // 是一个引用
): void {
  // define
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter(): any {
      console.log(val)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
    }
  })
}
