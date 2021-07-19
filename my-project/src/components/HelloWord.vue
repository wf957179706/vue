<template>
  <div>
      <h1 class="box1">{{ message }}</h1>
      <OneComponent></OneComponent>

  </div>
</template>

<script>
import OneComponent from './OneComponent'

export default {
  name: 'HelloWord',
  data () {
    return {
      message: 'hello world!!!!'
    }
  },
  components: {
    OneComponent
  }
}
</script>

<style>
.box1{
  height: 300px;
  width: 300px;
  line-height: 100px;
  color: red;
  background-color: yellow;
}

</style>
