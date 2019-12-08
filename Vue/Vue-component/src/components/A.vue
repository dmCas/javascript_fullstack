<template>
  <div class="a-test">
    A
    <testb></testb>
  </div>
</template>

<script>
import B from './B'
export default {
  provide: {
    name: '北辰'
  },
  components: {
    'testb': B
  },
  data(){
    return {
      // name: '北辰'
    }
  }
}
</script>

<style>

</style>