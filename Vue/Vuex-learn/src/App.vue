<template>
  <div id="app">
    <v-loading></v-loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/loading'
export default {
  name: 'App',
  components: {
    "v-loading": Loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
