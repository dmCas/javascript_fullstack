<template>
  <input type="text" @input="handleInput" @blur="handleBlur" :value="currentValue">
</template>

<script>
export default {
  name: 'iInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val){
      this.currentValue = val
    }
  },
  methods: {
    handleInput (event) {
      console.log(event)
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.$dispatch('iFormItem','on-form-change', value)
    },
    handleBlur(){
      this.$dispatch('iFormItem','on-form-blur', this.currentValue)
    }

  }
}
</script>

<style>

</style>