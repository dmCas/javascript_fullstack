<template>
  <div @mousedown="start">
    <el-button @click="open">open</el-button>
    <el-dialog title="tips" :visible="visible">
      <span @click="close">这是一段信息</span>
    </el-dialog>
  </div>
</template>


<script>
import dragAbleMix from './drag';
export default {
  mixins: [dragAbleMix],
  data () {
    return {
      visible: false
    }
  },
  methods: {
    open(){
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
}
</script>

<style>

</style>