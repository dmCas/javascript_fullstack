<template>
  <button :class="'i-button-size'+ size">
    <slot name="icon"></slot>
    <!-- 不具名插槽 -->
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, arr){
  if(arr.includes(value)){
    return true
  }
  else return false
}
export default {  
  data(){
    return {
      msg:'子组件的内容'
    }
  },
  props:{
    size: {
      // type: String,
      //校验传入的值是否为'small', 'large', 'defalut'
      validator (value) {
        return oneOf(value, ['small', 'large', 'defalut'])
      },
      default: 'default'
    }
  },
  methods:{
    handleClick(){
      this.$emit('on-click')
    },
    sureClick(){
      this.$emit('message', this.msg)
    }
  }
}
</script>

<style>
button{
  border: 1px solid orange;
  background-color: yellow;
  color: black;
}
.i-button-sizelarge{
  padding: 18px 30px;
}
.i-button-sizedefult{
  padding: 6px 8px;
}
</style>