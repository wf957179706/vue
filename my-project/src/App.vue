<template>
    <section class="conn">
      <header class="header">
        <HeaderComp></HeaderComp>
      </header>
      <div class="main">
        <div class="content">
          <div class="form">
            <input  v-model="numb" placeholder="工号">
            <br>
            <input v-model="name" placeholder="姓名">
            <br>
            <FormComp :na="name"></FormComp>
          </div>

        </div>
        <div class="sidebar">
          <div class="printform">
            <p>员工账号：</p>{{numb}}
            <br>
            <p>员工姓名：</p>{{name}}
          </div>
        </div>
      </div>
      <footer class="footer"></footer>
    </section>
</template>

<script>
import HeaderComp from './components/HeaderComp'
import FormComp from './components/FormComp'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    FormComp,
    HeaderComp
  }

}
</script>

<style>
html,body,ul,li,img{
  margin: 0px;
  padding: 0px;
}
.conn{
  width: 600px;
  background-color: antiquewhite;
  height: 500px;
  margin: 0 auto;
}
.header{
  width: 100%;
  height: 100px;
  background: aqua;
}
.main{
  width: 100%;
  height: 300px;
  background: yellow;
}
.content{
  width: 60%;
  background-color: chartreuse;
  float: left;
  height: 300px;
}

.sidebar{
  width: 40%;
  background-color: red;
  float: right;
  height: 300px;
}
.footer{
  width: 100%;
  height: 100px;
  background: #9d2bc7;
}
.form{
  width: 60%;
  margin-left: 20%;
  float: left;
  margin-top: 30px;
}
.printform{
  width: 60%;
  margin-left: 20%;
  float: left;
  margin-top: 30px;
  background: azure;
}
</style>
