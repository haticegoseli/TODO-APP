<template>
<div class="container">
  <div class="input-group mb-3">
    <form class="formClass" @submit.prevent="onSubmit">
      <input
        @keyup.enter="change"
        v-model="task"
        type="text"
        class="form-control"
        placeholder="Please enter your activity.">
      <hr>
    </form>
    <app-activities :propAct="activities"></app-activities>
</div>
</div>
</template>

<script>
import Activities from "./Activities";
import axios from 'axios'

export default {
  data(){
    return{
      activities : [],
      task : '',
      date : new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()
    }
  },
  methods:{
    change(e){
      let x = e.target
      console.log(e)
      if (x.value.length >= 6 && x.value.length <= 40){
        return this.activities.push("> " + x.value)
      }else if (x.value.length < 6){
        return this.$swal({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please do not enter less than 5 characters.',
        });
      }else if (x.value.length > 40){
        return this.$swal({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please do not enter more than 40 characters.',
        });
      }
    },
    onSubmit() {
      axios.post("https://todo-app-82415-default-rtdb.firebaseio.com/posts.json",
        [this.task, this.date])
        .then(response => {
          this.task = ' '
          console.log(response.data)
        })
        .catch(e => console.log(e));
    }
  },
  components:{
    appActivities : Activities
  }
}
</script>

<style scoped>
input{
  border: 1px solid lightcoral;
}
.formClass{
  width: 100%;
}

</style>
