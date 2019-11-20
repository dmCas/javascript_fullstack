<template>
  <div class="zoom">
      <div class="small-box"
      @mouseover="handleOver"
      @mousemove="handleMove"
      @mouseout="handleOut">
          <img :src="src" alt="">
          <div class="mask"></div>
      </div>
      <div class="layer">
        <div class="big-box">
          <img :src="bigSrc" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        bigSrc: {
            type:String
        },
        src: {
            type:String
        }
    },
    methods: {
        handleOver() {},
        handleMove(e) {
            //鼠标距离浏览器左上角的距离
            let objX = e.clientX 
            let objY = e.clientY

             //小图到浏览器左上角的距离
            let imgClientObj = this.$el.querySelector('.small-box').getBoundingClientRect()

            //蒙版移动距离
            let maskx = objX - 210/2 - imgClientObj.x 
            let masky = objY - 210/2 - imgClientObj.y

            maskx = maskx < 0? 0:maskx
            masky = masky < 0? 0:masky
            if(maskx + 210 >= 430) {
                maskx = 430 - 210
            }
            if(masky + 210 >= 430) {
                masky = 430 - 210
            }
            // this是组件的实例
            let maskNode = this.$el.querySelector('.mask')
            maskNode.style.transform = `translate(${maskx}px,${masky}px)`
            let percent = (800-430) / (430 -210);
            let bx = maskx * percent, by = m-asky *percent;
            let bigimage = this.$el.querySelector('.layer')
            bigimage.style.transform = `translate(${maskx}px,${masky}px)`
        },
        handleOut() {},
    }
}
</script>

<style>
.zoom {
    position: relative;
}
.small-box {
    position: relative;
    width: 430px;
    height: 430px;
}
.mask {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #666;
    opacity: .5;
    width: 210px;
    height: 210px;
}
.layer{
  position: absolute;
  border: 1px solid #000;
  width: 430px;
  height: 430px;
  overflow: hidden;
}
</style>
