<template>
  <div class="mine">
    这是我的页面 
    <!-- <router-link :to="{name:'/detail', params:{id: 123}}"> -->
      <button class="go-detail" @click="seeDetail">查看详情</button>
    <!-- </router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    seeDatail() {
      this.$router.push({name:'Detail',params:{id:666}})
    }
  }
}
</script> 

<style scoped>

</style>