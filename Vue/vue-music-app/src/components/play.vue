<template>
  <div class="player" v-show="playList.length > 0">
    <transition name="normal">
      <div class="normal-player">
        <div class="background">
          <img width="100%" height="100%" :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
        </div>
        <div class="top">
          <div class="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title" v-html="currentSong.name"></h1>
          <h2 class="subtitle" v-html="(currentSong.ar && currentSong.ar[0].name) || (currentSong.artists && currentSong.artists[0].name)"></h2>
        </div>
        <div class="middle" @click="paused()">
          <div class="middle-l">
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd" ref="imageWrapper">
                <img
                  ref="image"
                  :class="cdCls"
                  class="image"
                  :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)"
                >
              </div>
            </div>
            <div class="playing-lyric-wrapper">
              <!-- <div class="playing-lyric">{{playingLyric}}</div> -->
              <div class="playing-lyric"></div> 
            </div>
          </div>
        </div>
        <div class="foot">
          <ul>
            <li class="icon">
              <i class="iconfont">&#xe60a;</i>
            </li>
            <li class="icon">
              <i class="iconfont">&#xe605;</i>
            </li>
            <li class="icon">
              <i class="iconfont">&#xe78d;</i>
            </li>
            <li class="icon">
              <i class="iconfont">&#xe70e;</i>
            </li>
            <i class="icon">
              <i class="iconfont">&#xe64d;</i>
            </i>
          </ul>
        </div>
      </div>
    </transition>
    <!-- 播放器 -->
    <audio 
      ref="audio"
      @playing="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
      @pause="paused">
    </audio>
  </div>
</template>

<script>
import {playerMixin} from '@/common/mixin'
import api from '@/api'
export default {
  mixins: [playerMixin],
  data () {
    return {
      playing: false    
    }
  },
  computed: {
    cdCls () {
      return this.playing ? 'play': ''
    }
  },
  methods: {
    ready (){},
    error (){},
    updateTime (){},
    end(){},
    paused(){

    }
  },
  watch: {
    async currentSong (newSong, oldSong) {
      if (!newSong.id || newSong.id === oldSong.id) {
        return
      }
      if (!newSong.url) {
        // alert('请求音乐出错')
        const { data, code } = await api.MusicUrl(newSong.id)
        if (data && code === 200) {
          // console.log(data)
          newSong = {...newSong, url:data[0].url}
          console.log(newSong)
        }else{
          alert('请求音乐出错')
        }
      }
      this.$refs.audio.src = newSong.url
      this.$refs.audio.play()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
@font-face 
  font-family 'iconfont'  /* project id 1522223 */
  src url('//at.alicdn.com/t/font_1522223_18h0md6o20u.eot')
  src url('//at.alicdn.com/t/font_1522223_18h0md6o20u.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1522223_18h0md6o20u.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1522223_18h0md6o20u.woff') format('woff'),
  url('//at.alicdn.com/t/font_1522223_18h0md6o20u.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1522223_18h0md6o20u.svg#iconfont') format('svg')
.iconfont
  font-family "iconfont" !important
  font-size px2rem(60px)
  font-style normal
  -webkit-font-smoothing antialiased
  -webkit-text-stroke-width 0.2px
  color white
.player
  z-index 150
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 150
    background rgb(8, 5, 58)
    .background
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity 0.6
      filter blur(20px)
    .top
      position relative
      margin-bottom 25px
      .back
        position absolute
        top 0
        left px2rem(12px)
        z-index 50
        .icon
          display block
          height px2rem(100px)
          line-height px2rem(100px)
          padding 0 px2rem(30px)
          font-size 22px
          color #fff
      .title
        width 70%
        margin 0 auto
        line-height px2rem(100px)
        text-align center
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 18px
        color #fff
      .subtitle
        line-height px2rem(40px)
        text-align center
        font-size 14px
        color #fff
    .middle
      position fixed
      width 100%
      top px2rem(200px)
      bottom px2rem(340px)
      white-space nowrap
      font-size 0
      border 1px solid #000
      .middle-l
        display inline-block
        vertical-align top
        position relative
        width 100%
        height 0
        padding-top 80%
        .cd-wrapper
          position absolute
          left 10%
          top 0
          width 80%
          box-sizing border-box
          height 100%
          .cd
            width 100%
            height 100%
            border-radius 50%
            .image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
              box-sizing border-box
              border-radius 50%
              border 10px solid rgba(255, 255, 255, 0.1)
            .play
              animation rotate 20s linear infinite
        .playing-lyric-wrapper
          width 80%
          margin 30px auto 0 auto
          overflow hidden
          text-align center
          .playing-lyric
            height px2rem(40px)
            line-height px2rem(40px)
            font-size 14px
            color hsla(0, 0%, 100%, 0.5)
      .middle-r
        display inline-block
        vertical-align top
        width 100%
        height 100%
        overflow hidden
        .lyric-wrapper
          width 80%
          margin 0 auto
          overflow hidden
          text-align center
          .text
            line-height px2rem(64px)
            color hsla(0, 0%, 100%, 0.5)
            font-size 14px
            &.current
              color #fff


          .pure-music
            padding-top 50%
            line-height px2rem(64px)
            // color hsla(0, 0%, 100%, 0.5)
            font-size 14px
    .foot
      padding px2rem(60px) px2rem(10px)
      text-align center
      width 100%
      bottom px2rem(100px)
      position absolute
      ul 
        display flex
        .icon 
          flex 1
          justify-content center

</style>