import { mapActions } from 'vuex'

export const searchMixin =  {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange( query ) {
      // console.log(query)
      //处理带空格的情况
      this.query = query.trim()
      // 检验效果
      // setTimeout( ()=>{
      //   this.saveSearch()
      // }, 1000)
    },
    blurInput () {
      //父组件调用子组件内部的方法 给子组件加个ref属性
      this.$refs.searchBox.blur()
    },
    saveSearch ( song ){
      this.$refs.searchBox.setQuery(song) 
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'deleteAllSearchHistory'
    ])
  }
}