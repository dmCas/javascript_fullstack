<template>
  <div class="sidebar" :class="{showbar:showSidebar}">
    <div class="sidebar-con" :class="{showbar:showSidebar}">
      <div class="head">
        <div class="avatar">
          <img src="./../assets/微信图片_20191120191720.jpg" alt="">
        </div>
        <div class="name">北辰</div>
      </div>
      <div class="application">
        <ul>
          <li class="item-wrapper">
            <router-link to="" @click="_hidebar">
            <i class="iconfont">&#xe70c;</i>
            <span>我的消息</span>
            </router-link>  
          </li>
          <li class="item-wrapper">
            <router-link to="" @click="_hidebar">
            <i class="iconfont">&#xe70b;</i>
            <span>我的好友</span>
            </router-link>  
          </li>
          <li class="item-wrapper">
            <router-link to="" @click="_hidebar">
            <i class="iconfont">&#xe64f;</i>
            <span>听歌识曲</span>
            </router-link>  
          </li>
          <li class="item-wrapper">
            <router-link to="" @click="_hidebar">
            <i class="iconfont">&#xe609;</i>
            <span>夜间模式</span>
            </router-link>  
          </li>
        </ul>
      </div>
      <div class="menu">
        <ul>
          <li @click="_hidebar">
            <router-link to="/user" @click="_hidebar">
              <i class="icon">&#xe63c;</i>
              <span>个人中心</span>
            </router-link>
          </li>
          <li>
            <router-link to="" @click="_hidebar">
              <i class="icon">&#xe631;</i>
              <span>音效调整</span>
            </router-link>
          </li>
          <li>
            <router-link to="" @click="_hidebar">
              <i class="icon">&#xe65b;</i>
              <span>定时关闭</span>
            </router-link>
          </li>
          <li>
            <router-link to="" @click="_hidebar">
              <i class="icon">&#xe601;</i>
              <span>听歌识曲</span>
            </router-link>
          </li>
          <li>
            <router-link to="" @click="_hidebar">
              <i class="icon">&#xe600;</i>
              <span>帮助</span>
            </router-link>
          </li>
          <li>
            <router-link to="" @click="_hidebar">
              <i class="icon">&#xe61f;</i>
              <span>设置</span>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
    <div class="sidebar_mask" v-show="showSidebar" @click="_hidebar"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
    }
  },
  methods: {
    _hidebar(){
      this.$store.dispatch('setShowSidebar', false)
    }
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
@font-face 
  font-family 'iconfont'  /* project id 1522223 */
  src url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.eot')
  src url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.woff') format('woff'),
  url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1522223_5fdnkg7oxll.svg#iconfont') format('svg')

.iconfont
  font-family "iconfont" !important
  font-size 18px
  font-style normal
  color red
.sidebar 
  color #e8e8e8
  display flex
  .sidebar-con
    flex 0 px2rem(600px)
    background #f8faff
    position absolute
    top 0
    left px2rem(-800px)
    transform translateZ(0)
    opacity 0
    width px2rem(600px)
    z-index 9999
    height 100%
    overflow auto
    transition all 0.3s ease
    &.showbar 
      transform translateX(px2rem(800px))
      opacity 1
    .head 
      text-align center
      padding 20px 10px
      background-color #f0f5f9
      opacity  0.8 
      .avatar 
        width px2rem(130px)
        height px2rem(130px)
        background #f1f1f1
        border-radius 50%
        margin px2rem(60px) auto px2rem(30px)
        box-shadow 1px 1px 13px #f8faff
        img 
          width 100%
          border-radius 50%
      .name 
        font-size px2rem(32px)
        color #000
    .application
      padding px2rem(30px) px2rem(10px) px2rem(10px)
      text-align center
      &:after
          display inline-block
          position absolute
          left 0
          vertical-align middle
          top px2rem(500px)
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
      ul
        display flex
        text-align center
        .item-wrapper
          flex 1
          display inline-block
          span
            padding px2rem(5px) 0
            font-size 12px
            color black 
            text-align center
            display block
    .menu 
      margin-top px2rem(60px)
      background #f8faff
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
            span 
              vertical-align middle
              font-size px2rem(24px)
              padding-left px2rem(20px)
              color #000
          &hover 
            .icon,
            span 
              color #902444
  .sidebar_mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    background rgba(0, 0, 0, 0.3)
</style>
