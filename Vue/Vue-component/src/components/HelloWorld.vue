
<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <i-button size="defalut" @on-click="title">
      <i slot="icon">*</i>按钮
    </i-button>
    <i-button size="large" >提交</i-button>
    <!-- <div  @click="oSure">
      <i-button size="large" ref="sure">确认</i-button>
    </div> -->
    <i-button size="large" ref="sure" @click.native="oSure" @message="getMsg">确认</i-button>
    <div>{{mess}}</div>
  </div>
</template>

<script>
import button from "./button";
export default {
  name: "HelloWorld",
  data() {
    return {
      mess:''
      // size: 'large'
    };
  },
  components: {
    "i-button": button
  },
  
  methods: {
    title() {
      alert("你好");
    },
    oSure(){
      this.$refs.sure.sureClick()
    },
    getMsg(e){
      this.mess = e
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
