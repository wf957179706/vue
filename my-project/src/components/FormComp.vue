<template>
  <button  @click="sub()">提交</button>
</template>

<script>
export default {
  name: "FormComp",
  data: {

  },
  methods: {
    sub : function (){
      alert (this.na + '提交了表单！！！')
    }
  },
  props : ['na']

}
</script>

<style scoped>
button{
  width: 80px;
  height: 30px;
  color: azure;
  background: blueviolet;
}

</style>
