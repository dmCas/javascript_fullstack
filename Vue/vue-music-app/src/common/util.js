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

export function findIndex(list, song) {
  //object.findIndex() 原生JS自带方法 返回true/false
  return list.findIndex((item) => {
    return item.id === song.id
  })
}