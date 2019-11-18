<template>
  <div class="count">
    {{count}}
    <button @click="addAction(9)">+</button>
    <button @click="reduceAction">-</button>
    {{getCount}}
  </div>
</template>

<script>
// Vuex 自带方法 
import { mapState, mapMutations, mapGetters, mapActions } from  'vuex'
export default {
  data(){
    return {
     
    }
  },
  // mounted() {
  //   this.myCount = this.$store.state.count
  // },
// -------写法一----------
  // computed: {
  //   //响应式数据
  //   myCount() {
  //     return this.$store.state.count
  //   }
  // },
// -------写法二----------
  // computed: mapState({
  //   myCount: state => state.count
  //   // myCount( state ) {
  //   //   return state.count
  //   // }
  // }),
// -------写法三----------
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  },
  // computed: mapState(['count']),
  methods : {
    // test () {
    //   this.myCount++
    // }
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
}
}
</script>

<style>

</style>