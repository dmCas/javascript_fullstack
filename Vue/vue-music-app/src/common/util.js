export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      //防止作用域被修改
      func.apply(this, args)
    }, delay)
  }
}