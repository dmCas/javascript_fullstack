<template>
  <div class="seller" ref="sellerWrapper">
    <div class="seller-container" >
      <div class="seller-info">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <el-rate v-model="value" disabled></el-rate>
          <div class="text">({{value}})</div>
          <div class="text">月售{{seller.sellCount}}单</div>
        </div>
        <ul class="remark">
          <div class="block">
            <h2>起送价</h2>
            <div class="content">
              <span style="font-size:24px">{{seller.minPrice}}</span>元
            </div>
          </div>
          <div class="block">
            <h2>商家配送</h2>
            <div class="content" >
              <span style="font-size:24px">{{seller.deliveryPrice}}</span>分钟
            </div>
          </div>
          <div class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span style="font-size:24px">{{seller.deliveryTime}}</span>分钟
            </div>
          </div>
        </ul >
        <div class="collect" @click="collect">
          <span class="icon-collect" v-if="ifcollect">
            <img src="./collect_2.png" alt="">
          </span>
          <span class="icon-collect" v-else>
            <img src="./collect_1.png" alt="">
          </span>
          <span class="text">{{text}}</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="seller-announce">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">
            {{seller.bulletin}}
          </p>
        </div>
        <ul class="supports" v-if="seller.supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[seller.supports[index].type]">1</span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics" >
        <h1 class="title">商家实景</h1>
        <ul class="pic-list" ref="Picwrapper">
          <li class="pic-item" v-for="(pic,indexPic) in seller.pics" :key="indexPic">
            <img :src="seller.pics[indexPic]" alt="">
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info,indexInfo) in seller.infos" :key="indexInfo">{{seller.infos[indexInfo]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      seller: {},
      value: 0,
      ifcollect:false,
      text:'收藏',
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    };
  },
  created() {
    this.$http.get("http://localhost:8080/static/seller.json", {}).then(res => {
      // console.log(res)
      if (res.data.errno === 0) {
        // this.seller = res.data.data
        this.seller = Object.assign({}, this.seller, res.data.data);
        this.value = res.data.data.score;
        console.log(this.value);
         this.$nextTick(() => {
            this._initScroll()
        })
      }
    });
  },
  methods:{
    _initScroll () {
      this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
        click: true
      }),
      this.picScroll = new BScroll(this.$refs.Picwrapper,{
        click: true
      })
    },
    collect(){
      console.log(123)
      if(this.ifcollect)
        {this.ifcollect = false
        this.text = '收藏'
        }
      else{
        this.ifcollect = true
        this.text = '已收藏'
      }
    }
  }
};
</script>

<style lang="stylus">
@import './../../common/stylus/mixin'
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  z-index -999
  overflow hidden
  .seller-container  
    .seller-info 
      position relative
      padding 18px
      .title 
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
        font-weight normal
      .desc 
        padding-bottom 18px
        position relative
        font-size 0
        .el-rate
          display inline-block
        .text
          display inline-block
          margin-right 12px
          line-height 18px
          vertical-align top
          font-size 10px
          color #4d555d
        &:after
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
      .remark
        display flex
        padding-top 18px
        .block
          -webkit-box-flex 1
          -ms-flex 1
          flex 1
          text-align center
          border-right 1px solid rgba(7,17,27,.1)
        .block:nth-child(3)
            border-right none 
          h2
            margin-bottom 4px
            line-height 10px
            font-size 10px
            color #93999f
          .content
            line-height 24px
            font-size 10px
            color #07111b   
      .collect 
        position absolute
        width 50px
        right 11px
        top 18px
        text-align center 
        .icon-collect
          display block
          margin-bottom 2px
          line-height 24px
          font-size 24px
          color #d4d6d9
          img 
            width 22px
            height 22px
        .text
          line-height 8px
          font-size 10px
          color #4d555d
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .seller-announce
      padding 18px 18px 0
      .title
        margin-bottom: 8px
        line-height 14px
        color #07111b
        font-size 14px
      .content-wrapper
        padding 0 12px 16px
        position relative
        .content
          line-height: 24px
          font-size 12px
          color #f01414
        &:after
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
      .supports
        width 100%
        .support-item
          padding 16px 12px
          position relative
          font-size 0
          &:after
            display block
            position absolute
            left 0
            bottom 0
            width 100%
            border-top 1px solid rgba(7,17,27,.1)
            content " "
          .icon
            display inline-block
            width 16px
            height 16px
            vertical-align top
            margin-right 6px
            background-size 16px 16px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_2')
            &.discount
              bg-image('discount_2')
            &.guarantee
              bg-image('guarantee_2')
            &.invoice
              bg-image('invoice_2')
            &.special
              bg-image('special_2')
          .text
            line-height 16px
            font-size 12px
            color #07111b
    .pics
      position relative
      padding 18px
      width: 100%;
      overflow hidden
      white-space nowrap
      .title 
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
        font-weight normal
      .pic-list
        font-size 0
        overflow  scroll
        .pic-item
          display inline-block
          margin-right 6px
          width 120px
          height 90px
          img 
            width 120px
            height 90px
    .info
      padding 18px 18px 0
      color #07111b
      .title
        padding-bottom 12px
        line-height 14px
        position relative
        font-size 14px
        width 100%
        &:after 
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
      ul
        .info-item
          padding 16px 12px
          line-height 16px
          position relative
          font-size 12px
          &:after
            display block
            position absolute
            left 0
            bottom 0
            width 100%
            border-top 1px solid rgba(7,17,27,.1)
            content " "
    

        
        


  










</style>