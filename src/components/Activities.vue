<template>
  <div v-if="propAct.length > 0" class="container">
    <div  class="container2">
      <h3>Activities List</h3>
      <table class="table table-striped">
        <thead class="tag">
        <tr><th class="taskTitle">TASKS</th></tr>
        <tr class="table-warning" v-for="(activ, index) in propAct">
          <th scope="col" class="item">{{activ}}</th>
          <th scope="col"><button @click="deleteItem(index)" class="delete"> DELETE </button></th>
        </tr>
        </thead>
      </table>
      <button v-if="propAct.length > 0" class="btn" @click="removeAll">REMOVE ALL</button>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  data(){
    return{
      taskList : []
    }
  },
  props: [
    "propAct",
    "err"
  ],
  methods:{
    deleteItem(index){
      this.propAct.splice(index, 1)
    },
    dateMethod(e){
      let y = e.target
      console.log(y.value)
    },
    removeAll(index){
      this.propAct.splice(index)
    }
  },
}
</script>

<style scoped>
h3{
  text-align: center;
  color: darkolivegreen;
  font-weight: bold;
  font-size: 30px;
}
.tag{
  padding: 10px;
  color: #000;
  cursor: default;
  font-size: 14px;
  margin-right: 10px;
}
.container{
  border: 1px solid #cccc55;
  padding: 20px;
  background-color: #F5F5F5;
}

.delete{
  float: right;
  background-color: whitesmoke;
  border-radius: 12px;
  color: orangered;
  width: 100px;
  height: 45px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border: 1px dot-dash red;
}
.delete:hover{
  background-color: orangered;
  color: whitesmoke;
  font-weight: bold;
}
.taskTitle{
  color: forestgreen;
  font-weight: bold;
  font-size: 21px;
  text-decoration: underline;
}
.item{
  font-weight: bold;
  font-size: 20px;
  font-family: "Comic Sans MS";
}
li{
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn{
  text-align: right;
  float: right;
  font-weight: bold;
  border: 2px solid darkorange;
}
.btn:hover{
  background-color: limegreen;
  color: black;
  font-weight: bold;
  border: 2px dotted white;
}
table, tr, thead{
  border-bottom: 2px solid darkorange ;
}
th{
  color: orangered;
}


</style>
