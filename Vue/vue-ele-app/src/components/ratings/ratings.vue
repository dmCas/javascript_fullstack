<template>
  <div class="ratings-wrapper" ref="ratingWrapper">
    <div class="ratings">
      <!-- 商家信息 -->
      <div class="information-wrapper">
        <div class="left-info">
          <h1 class="score" v-if="seller.score > 0">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="right-info">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star">
              <span class="star-item" :class="seller.serviceScore>1?'on':'off'"></span>
              <span class="star-item" :class="seller.serviceScore>2?'on':'off'"></span>
              <span class="star-item" :class="seller.serviceScore>3?'on':'off'"></span>
              <span class="star-item" :class="seller.serviceScore>4?'on':'off'"></span>
              <span class="star-item" :class="seller.serviceScore>4.5?'on':'off'"></span>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star">
              <span class="star-item" :class="seller.foodScore>1?'on':'off'"></span>
              <span class="star-item" :class="seller.foodScore>2?'on':'off'"></span>
              <span class="star-item" :class="seller.foodScore>3?'on':'off'"></span>
              <span class="star-item" :class="seller.foodScore>4?'on':'off'"></span>
              <span class="star-item" :class="seller.foodScore>4.5?'on':'off'"></span>
            </div>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <!-- 条件选择 -->
      <div class="ratingSelect">
        <div class="rating-type">
          <span class="block positive" :class="clickSelect1 ?  'active': ''" @click="selectOne();showAll()">
            全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" :class="clickSelect2 ?  'active': ''" 
            @click="selectTwo();ifPositive()" >
            满意
            <span class="count">{{positive.length}}</span>
          </span>
          <span
            class="block negative"
            :class="clickSelect3 ?  'active2': ''"
            @click="selectThree();ifNegative()"
          >
            不满意
            <span class="count">{{negative.length}}</span>
          </span>
        </div>
        <div class="switch" :class="{'on': watchSelect}" @click="shaixuan()">
          <span class="icon-check_circle"></span>
          <div class="text">只看有内容的评价</div>
        </div>
      </div>
      <!-- 展示评论 -->
      <div class="rating-wrapper">
        <ul>
          <li v-for="(items,index) in ratings" :key="index" class="rating-item" v-show="ifShow(index)">
            <!-- 用户头像 -->
            <div class="avatar">
              <img
                :src="ratings[index].avatar"
                alt
                width="28"
                height="28"
                style="border-radius:50%;"
              />
            </div>
            <!-- 评论内容 -->
            <div class="content">
              <h1 class="name">{{ratings[index].username}}</h1>
              <div class="star-wrapper">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  :score-template="value[index]"
                ></el-rate>
              </div>
              <p class="text">{{ratings[index].text}}</p>
              <!-- 推荐 -->
              <div class="recommend" v-if="ratings[index].recommend.length>0">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(rmd,rmdIdx) in items.recommend" :key="rmdIdx+'rmd'">{{rmd}}</span>
              </div>
              <!-- 评论时间 -->
              <div class="time">{{ratings[index].rateTime}}</div>
            </div>
          </li>
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
      ratings: {},
      seller: {},
      clickSelect1: true,
      clickSelect2: false,
      clickSelect3: false,
      value:3.9,
      recommend: [],
      watchSelect: false,
      texts: [],
      positive: [],
      negative:[],
      posTxt: false,
      negTex: false,
      All: true
    };
  },
  created() {
    let texts = []
    let value = []
    let recommend = []
    let positive = []
    let negative = []
    this.$http.get("http://localhost:8080/static/ratings.json")
    .then( (res) => {
      // console.log(res.data.data[0].score);
      if (res.data.errno == 0) {
        this.ratings = res.data.data;
        this.$nextTick(() => {
          console.log(this.$el);
          this._initScroll()
          })
        console.log(res)
        for(let i=0;i<res.data.data.length;i++){
          recommend.push(res.data.data[i].recommend)
          // value.push(res.data.data[i].score.toString())
          if(res.data.data[i].rateType === 0){
            positive.push(res.data.data[i].text)
          }
          if(res.data.data[i].rateType === 1){
            negative.push(res.data.data[i].text)
          }
          texts.push(res.data.data[i].text)
        } 
      }
      this.recommend = Object.assign([], recommend)
      // this.value = Object.assign([], value)
      this.texts=Object.assign([], texts)
      this.positive=Object.assign([], positive)
      this.negative=Object.assign([], negative)
      // console.log(value)
    }),
      this.$http
        .get("http://localhost:8080/static/seller.json", {})
        .then(res => {
          // console.log(res)
          if (res.data.errno === 0) {
            // this.seller = res.data.data
            this.seller = Object.assign({}, this.seller, res.data.data);
          }
        });
  },
  methods: {
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.ratingWrapper, {
        click: true
      })
    },
    selectOne() {
      if (this.clickSelect1) {
        this.clickSelect1 =true;
      } else {
        this.clickSelect1 = true;
        this.clickSelect2 = false;
        this.clickSelect3 = false;
      }
      console.log(this.ratings);
      console.log(this.ratings[0].text)
    },
    selectTwo() {
      if (this.clickSelect2) {
        this.clickSelect2 = true;
      } else {
        this.clickSelect2 = true;
        this.clickSelect1 = false;
        this.clickSelect3 = false;
      }
    },
    selectThree() {
      if (this.clickSelect3) {
        this.clickSelect3 = true;
      } else {
        this.clickSelect2 = false;
        this.clickSelect1 = false;
        this.clickSelect3 = true;
      }
    },
    shaixuan() {
      if(this.watchSelect){
        this.watchSelect = false
      }
      else {
        this.watchSelect = true
      }
      console.log(this.watchSelect)
    },
    showAll(){
      this.All = true
      this.posTxt = false
      this.negTxt = false
    },
    ifPositive(){
      if(!this.posTxt){
        this.posTxt = true
        this.negTxt = false
        this.All = false
      }
      console.log("查看满意的评价"+ this.posTxt)
    },
    ifNegative(){
      if(!this.negTxt){
        this.negTxt = true
        this.posTxt = false
        this.All = false
      }
      console.log("查看差评"+ this.negTxt)
    },
    ifShow(index) {
      if(this.posTxt && this.watchSelect) {
        console.log("获得有内容的好评")
        return this.ratings[index].rateType === 0 && this.texts[index] != ''
      }
      else if(this.posTxt) {
        console.log("成功获得满意评价")
        return this.ratings[index].rateType === 0 
      }
      else if(this.negTxt && this.watchSelect) {
        console.log("获得有内容的差评")
        return this.ratings[index].rateType === 1 && this.texts[index] != ''
      }
      else if(this.negTxt) {
        console.log("这是差评")
        return this.ratings[index].rateType === 1 
      } 
      else if(this.All && this.watchSelect){
        console.log("查看有内容的评价")
        return this.texts[index] != ''
      }
      else if(this.All){
        console.log("查看所有")
        return true
      }
      else if(!this.watchSelect){
        console.log("this.negTex"+this.negTex)
        return true
      }
      else if(this.watchSelect){
        return this.texts[index] != ''
      }
      else {
        console.log(32322)
        return
      }
    }
  }
};
</script>

<style lang="stylus">
.ratings-wrapper
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  z-index -999
  overflow hidden
  .ratings
    span 
      vertical-align baseline
    .information-wrapper
      display flex
      padding 18px 0
      .left-info
        flex 0 0  137px
        padding 6px 0
        width 137px
        border-right 1px solid rgba(7, 17, 27 ,.1)
        text-align center
        .score
          margin-bottom 6px
          line-height 28px
          font-size 24px
          color #f90
        .title
          margin-bottom 6px
          line-height 12px
          font-size 12px
          color #07111b
        .rank
          line-height 10px
          font-size 10px
          color #93999f
      .right-info
        flex 1
        padding 6px 0 6px 24px
        .score-wrapper
          margin-bottom 6px
          font-size 0
          .title
            display inline-block
            line-height 18px
            vertical-align middle
            font-size 12px
            color #07111b
          .star
            display inline-block
            margin 0 12px
            vertical-align middle
            .star-item
              width 15px
              height 15px
              margin-right 6px
              background-size 15px 15px
              display inline-block
              background-repeat no-repeat
            .on 
              background-image url('./star.png')
            .off
              background-image url('./star1.png')
          .score
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #f90
        .delivery-wrapper
          font-size 0
          .title
            display inline-block
            line-height 18px
            vertical-align middle
            font-size 12px
            color #07111b
          .delivery
            margin-left 12px
            font-size 12px
            color #93999f
            vertical-align middle
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .ratingSelect
      .rating-type
        padding 18px 0
        margin 0 18px
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
        .block
          display inline-block
          padding 8px 12px
          margin-right 8px
          line-height 16px
          border-radius 1px
          font-size 12px
          .count 
            margin-left 2px
            font-size 8px
        .positive
          background-color rgba(0,160,220,.2)
          color black
        .active
          background-color #00a0dc
          color #Fff
        .negative
          background-color rgba(77,85,93,.2)
        .active2
          background-color #4d555d
          color white
      .switch
        padding 12px 18px
        line-height 24px
        border-bottom 1px solid rgba(7,17,27,.1)
        color #93999f
        font-size 0
        &.on 
          color #00c850
        .icon-check_circle
          font-family sell-icon!important
          speak none
          font-style normal
          font-weight 400
          font-variant normal
          text-transform none
          line-height 1
          -webkit-font-smoothing antialiased
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
        .on 
          background-color #00c850
        .text
          display inline-block
          vertical-align top
          font-size 12px
          color #93999f
    .rating-wrapper 
      padding 0 18px
      .rating-item
        display flex
        padding 18px 0
        position relative
        .avatar
          flex 0 0 28px
          width 28px
          margin-right 12px
        .content
          position relative
          -webkit-box-flex 1
          -ms-flex 1
          flex 1
          .name
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color #07111b
          .star-wrapper
            .el-rate
              font-size 12px
              position relative
              left -2px
              .el-rate__item
                width 10px
                height 10px
                margin-right 3px
          .text
            margin-bottom 8px
            line-height 18px
            color #07111b
            font-size 12px
          .time
            position absolute
            top 0
            right 0
            line-height 12px
            font-size 10px
            color #93999f
          .recommend
            line-height 16px
            font-size 0
            .icon-thumb_up,
            .item 
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
              font-family sell-icon!important
              color #00a0dc
            .item
              padding 0 6px
              border 1px solid rgba(7,17,27,.1)
              border-radius 1px
              color #93999f
              background #fff
      
</style>