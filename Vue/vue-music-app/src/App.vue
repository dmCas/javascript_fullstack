<template>
  <div id="app">
    <!-- 头部 -->
    <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- Tab -->
    <v-tab></v-tab>
    <side-bar></side-bar>
    <router-view/>
    <v-play></v-play>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'
import play from '@/components/play'
export default {
  name: 'App',
  components: {
    'v-header':header,
    'side-bar':sidebar,
    'v-tab': tab,
    'v-play': play
  }
}
</script>

<style lang="stylus">
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important
  font-size 20px
  font-style normal
  color #090707
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background #fff
  color #000
</style>
