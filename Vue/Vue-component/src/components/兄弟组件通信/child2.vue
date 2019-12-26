<template>
  <div class="child2">child2
    <div>{{mess}}</div>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data(){
    return {
      mess:''
    }
  },
  mounted (){
    bus.$on('text', (text)=>{
      console.log(text)
      this.mess = text
    })
  }
}
</script>

<style  scoped>

</style>