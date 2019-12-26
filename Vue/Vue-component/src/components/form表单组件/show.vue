<template>
  <div class="show">
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import iForm from './form'
import iFormItem from './form-item'
import iInput from './input'
export default {
  components: {
    iForm,
    iFormItem,
    iInput
  },
  data(){
    return{
      formValidate: {
        name:''
      },
      ruleValidate: {
        //拿到name属性
        name: [
          {required:true, message:'用户名不能为空', trigger:'blur'}
        ]
      }
    }
  }
}
</script>

<style>

</style>