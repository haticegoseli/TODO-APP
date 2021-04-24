<template>
  <div class="container">
    <button class="btn" @click="taskShow">Tasks List</button>
    <br><br>
    <table class="table table-striped">
      <thead class="tag">
      <tr class="table-warning" v-for="tasks in taskList">
        <th scope="col" class="item">{{tasks[0]}}</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      taskList : []
    }
  },
  methods :{
    taskShow(){
      axios.get("https://todo-app-82415-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
          let data = response.data;
          for (let key in data){
            this.taskList.push(data[key]);
          }
          console.log(response.data)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.btn{
  float: right;
  border: 2px solid saddlebrown;
}
.btn:focus{
  background-color: orangered;
  color: white;
  font-weight: bold;
}
ul{
  list-style-type: square;
}
table{
  background-color: #F5F5F5;
  width: 300px;
  float: right;
  margin-right: 400px;
}
th{
  text-align: center ;
  color: orangered;
  text-transform: uppercase;
}


</style>
