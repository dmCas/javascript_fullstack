const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      //防止回调函数修改作用域
      fn.apply(this, ...args)
    }, delay)
  }
}