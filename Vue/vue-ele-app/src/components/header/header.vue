<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header">
      <div class="content-wrappe">
        <!-- 头像 -->
        <div class="avatar">
          <img src="./brand@2x.png" alt="">
        </div>
        <!-- 右侧文字简述 -->
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">粥品香坊</span>
          </div>
          <div class="descriptiton">蜂鸟专送/38分钟送达</div>
          <div class="support">
            <span class="icon decrease"></span>
            <span class="text">在线支付满28减5</span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('http://ustbhuangyi.com/sell/api/seller')
    .then((res) => {
      console.log(res)
    })
  }
}
</script>


<style lang='stylus' scoped>
// 引入定义该变量的文件
@import '../../common/stylus/mixin'
.header
  position relative
  color #fff
  background-color rgba(7, 17, 27, 0.5)
  .content-wrappe
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      // 容器以content为标准 头部对齐
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      font-size 14px
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          vertical-align middle
          width 30px
          height 18px
          display inline-block
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
// 要让两个盒子拦腰对齐，要都加上 vertical-align middle

        .name
          vertical-align middle
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .descriptiton
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          vertical-align middle
          &.decrease
            bg-image('decrease_1')

          &.discount
            bg-image('discount_1')

          &.invoice
            bg-image('invoice_1')

          @.special
            bg-image('special_1')

          @.guarantee
            bg-img('guarantee_1')
        .text
          font-size 10px
          line-height 12px
          vertical-align middle
        







</style>
