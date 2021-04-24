<template>
  <div id="app">
    <br>
    <h1>TODO APP</h1>
    <Header/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Entry from "./components/Entry";
import Header from "./components/Header";
export default {
  components:{
    Header,
    Entry
  }
}
</script>

<style>
h1{
  color: orangered;
  text-align: center;
  font-family: "Comic Sans MS";
  font-size: 50px;
}
body{
  background-image: url("./components/background.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;

}
</style>
