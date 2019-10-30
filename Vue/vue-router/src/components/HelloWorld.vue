<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <button @click="goLogin">去登录</button> -->
    <router-link to="/login"><!-- 类似于h5 a标签 -->
      <button>去登录</button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goLogin() {
      this.$router.push({path:'/login'}) //编程式路由跳转
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
