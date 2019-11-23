<template>
  <!-- :pullup动态向子组件传值 -->
  <!-- 接收croll组件中抛出 -->
  <v-scroll 
  class="suggest" 
  ref="suggest" 
  :pullup="pullup"
  :data="result"
  :beforeScroll="beforeScroll"
  @scrollToEnd = "searchMore"
  @beforeScroll = "listScroll"
  >
    <!-- <div class="head">
      <span>单曲</span>
    </div> -->
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(song, index) in result" :key="index" @click="selectItem(song)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <!-- v-html可以存放方法 -->
          <p class="text" v-html="getDisplayName (song)"></p>
        </div>
      </li>
      <!-- loading -->
      <load v-show="hasMore" class="loading-wraper">
      </load>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import load from '@/components/load'
import api from '@/api'
const limit = 20
export default {
  name: 'suggest',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      page: 1,
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll: true
    }
  },
  methods: {
    fetchResult (){
      const params = {
        limit,  
        offset: this.page -1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        if(res.code === 200){

          //数组拼接
          this.result = [...this.result, ...res.result.songs]
          this._checkMore(res.result)
        }
      })
    },
    search (){
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0,0)
      this.result = []
      this.fetchResult()
    },
    getDisplayName (song){
      return `${song.name}-${song.artists[0] && song.artists[0].name}`
    },
    searchMore(){
      this.page++
      this.fetchResult()
    },
    listScroll(){
      this.$emit('listScroll')
    },
    _checkMore(data){
      if(data.songs.length < 12 || ((this.page -1) * limit) >= data.songCount){
        this.hasMore = false
      }
    },
    selectItem (item) {
      this.$emit('select', item)
    }
  },
  watch:{
    query (newQuery){
      if(!newQuery){
        return
      }
      this.search(newQuery)
    }
  },
  components: {
    'v-scroll':scroll,
     load
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest 
  height 100%
  overflow hidden
  .head
    padding px2rem(20px) px2rem(60px)
    font-weight bolder
  .suggest-list 
    padding 0 px2rem(60px)
    .suggest-item 
      display flex
      align-items center
      line-height px2rem(80px)
    .icon 
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      // color hsla(0,0%,100%,.3)
    .name 
      flex 1
      font-size 14px
      // color hsla(0,0%,100%,.3)
      overflow hidden
      .text 
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .loading-wraper 
      height px2rem(80px)
  .no-result-wrapper 
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    text-align center
    span 
      font-size 14px
      // color hsla(0,0%,100%,.3)
</style>
