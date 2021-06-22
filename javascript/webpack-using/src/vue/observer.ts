import { Dep } from './dep'

/**
 * Define a reactive property on an Object.
 */
export function defineReactive(
  target: any,
  key: string,
  val: any
): void {
  const dep = new Dep()
  // define
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter(): any {
      dep.depend()
      return 1
    },
  })
}
