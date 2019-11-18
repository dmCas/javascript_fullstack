<template>
  <div id="app">
    <!-- 头部 -->
    <v-header :seller="seller"></v-header>
    <!-- <router-view  :seller="seller" /> -->
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json', {})
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          // this.seller = res.data.data
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video, input 
  margin 0
  padding 0
  border 0
  font-size 100%
  font-weight normal
  vertical-alige baseline
.tab
  display flex
  height 40px
  line-height 40px
  width 100%
  border-1px(rgba(7, 17, 27, 0.1))
  &-item
    flex 1
    text-align center
    a
      text-decoration none
      display block
      font-size 14px
      color rgb(77, 85, 93)
      -webkit-tap-highlight-color rgba(0, 0, 0, 0) 
      &.router-link-active
        color rgb(240, 20, 20)
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video, input
    margin 0
    padding 0
    border 0
    font-size 100%
    font-weight normal
    vertical-align baseline
</style>
