<template>
<div class="container">
  <div class="row">
    <div class="button">
      <router-link class="btn btn-default" to="/" tag="button" active-class="active">Home</router-link>
      <router-link class="btn btn-default" to="/create-task" tag="button" active-class="active">Create Task</router-link>
      <router-link class="btn btn-default" to="/saved" tag="button" active-class="active">Saved Tasks</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-default{
  border: 1px solid darkorange;
}
.btn-default:focus{
  background-color: orangered;
  color: white;
  font-weight: bold;
}

</style>
