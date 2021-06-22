// css
import './styles/global.scss'

import { defineReactive } from '@/vue/observer'

const obj = { a: 1 }

defineReactive(obj, 'a', obj.a)

obj.a = 2

console.log(obj.a)