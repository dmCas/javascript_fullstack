<template>
  <div class="child1">
    child1
    <button @click="send">派发时间</button>
  </div>
</template>

<script>
//与child2同一个vue实例
import bus from '@/bus/bus'
export default {
  data () {
    return {
      message: '这是child1的数据'
    }
  },
  methods: {
    send () {
      // 方法一
      bus.$emit('text',this.message)

    }
  }
}
</script>

<style  scoped>

</style>