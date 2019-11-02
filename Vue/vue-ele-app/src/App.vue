<template>
  <div id="app">
    <!-- 父组件给子组件传值 -->
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json', {})
      .then((res) => {
        console.log(res)
        if(res.data.errno === 0){
          // 会覆盖已有数据
          // this.seller = res.data.data

          // 合并两个对象 Object.assign()
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style>

</style>
