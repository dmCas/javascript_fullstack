<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为：
      <span class="green">
        {{msg}}
      </span>
    </p>
    <!-- 子组件接受 -->
    <child v-on:message="getMsg"></child>
  </div>
</template>
<script>
import child from './child'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (e) {
      this.msg = e
    }
  }
}
</script>

<style>
.green{
  color: green;
}
</style>