<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
export default {
  name: 'srcoll',
  props: {
    /**
      * 1 滚动的时候会派发scroll事件，会节流。
      * 2 滚动的时候实时派发scroll事件，不会节流。
      * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      */
    probeType: {
      type: Number,
      default: 1
    },
    /**
      * 点击列表是否派发click事件
      */
    click: {
      type: Boolean,
      default: true
    },
    /**
      * 是否开启横向滚动
      */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
      * 是否派发滚动事件
      */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 列表的数据
      */
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 当数据更新后，刷新scroll的延时。
      */
    refreshDelay: {
      type: Number,
      default: 20
    },
    direction: {
      type: String,
      default: DIRECTION_V
    }
  },
  mounted () {
    setTimeout(() =>{
      this._initScroll()
    }, 20)
  },
  methods: {
    //this.$nextTick 保证页面渲染完才去执行
    _initScroll (){
      if(!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        //
        probeType: this.probeType,
        eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
      })

      if(this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      //是否派发上拉加载
      if (this.pullup) {
        //监听 页面滑倒底 触发scrollEnd的回调方法
        this.scroll.on('scrollEnd', () => {
          if(this.scroll.y <= (this.scroll.maxScrollY +50)){
            this.$emit('scrollToEnd')
          }
        })
      }

      //是否派发下拉刷新事件
      if(this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          if (pos.y>50) {
            this.$emit('pulldown')
          }
        })
      }

      //是否派发列表滚动开始事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit ('beforeScroll')
        })
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    refresh() {
      //refresh() 是better-scroll自带的方法
      this.scroll && this.scroll.refresh()
      // if(this.scroll) {
      //   this.scroll.refresh()
      // }
    }
  },
  watch: {
    data() { //监听数据变化, 延时xx时间后刷新better-scroll的效果，保证滚动效果的正常
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style>

</style>