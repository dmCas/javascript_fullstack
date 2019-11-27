<template>
  <el-carousel :autoplay="false" type="card" height="200px" indicator-position="none" >
    <el-carousel-item v-for="(item,index) in playlist" :key="index">
      <div class="icon">
        <img :src="item.coverImgUrl" alt="">
        <span class="name">{{item.name}}</span>
        <div class="showicon">
          <i class="iconfont">&#xe67f;</i>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

import api from '@/api'
export default {
  
  data(){
    return {
      playlist: []
    }
  },
  methods: {
    _getPlaylist(){
      api.MusicPlayList().then((res) => {
        if(res.code == 200){
          this.playlist = res.playlists.slice(0,3)
          console.log(this.playlist)
        }
      })
    }
  },
  created (){
    this._getPlaylist()
    console.log(1)
  }
}
</script>

<style lang="stylus">
@font-face 
  font-family 'iconfont'  /* project id 1522223 */
  src url('//at.alicdn.com/t/font_1522223_wtv37uzifm.eot');
  src url('//at.alicdn.com/t/font_1522223_wtv37uzifm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1522223_wtv37uzifm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1522223_wtv37uzifm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1522223_wtv37uzifm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1522223_wtv37uzifm.svg#iconfont') format('svg')
.iconfont
  font-family "iconfont" !important
  font-size px2rem(60px)
  font-style normal
  -webkit-font-smoothing antialiased
  -webkit-text-stroke-width 0.2px
  color red
.el-carousel
  display flex
  align-items center
  .el-carousel__item
    // color #475669
    font-size 14px
    // opacity 0.75
    margin 0 auto 
    text-align center
    box-sizing border-box
    width 170px
    height 200px
    background #F8FAFF
    line-height 30px
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    border-bottom 1px solid #fff
    border-radius 5px
    .el-carousel__container
      height 0
    .icon
      position relative
      img 
        width 170px
        height 170px
        display block
      .name
        // padding 40px 
        font-size 10px
      .showicon
        position absolute
        top 0
        left 200px
      
    
// .el-carousel__item:nth-child(2n)
   
// .el-carousel__item:nth-child(2n+1) 
//    background #fff
  
</style>