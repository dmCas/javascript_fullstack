<template>
  <div>
    <label>
      <div>
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import emmiter from '../../mixins/emitter'
import AsyncValidator from 'async-validator'
export default {
  name: 'iFormItem',
  inject:['form'],
  mixins: [emmiter],
  props: { 
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  //组件渲染时，将实例缓存到Form中
  mounted (){
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  data(){
    return {
      validateState: '', //校验状态
      validateMessage: ''//校验不通过时提示信息
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    }
  }, 
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this)
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFeildBlur)
      this.$on('on-form-change', this.onFeildChange)
    }
  }

}
</script>

<style>

</style>