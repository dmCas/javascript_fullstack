<template>
  <div class="playlist">
    <v-carcousel></v-carcousel>
    <div class="list-show">
      
    </div>
  </div>
</template>

<script>
import Carcousel from '@/components/carousel'
export default {
  components: {
    'v-carcousel': Carcousel
  }
}
</script>

<style lang="stylus">
.playlist
  width 100%
  margin-top 10px
  height 100%
</style>