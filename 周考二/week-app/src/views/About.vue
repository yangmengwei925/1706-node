<template>
  <div class="about">
    <h1>{{details.sort}}</h1>
     <h1>{{details.name}}</h1>
      <h1>{{details.values}}</h1>
       <h1>{{details.hot}}</h1>
       <div>
         <span v-for="item in list" :key="item">{{item}}</span>
       </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[...Array(11).keys()],
      details:this.$route.params
    }
  },
  created(){

  }
}
</script>
<style>
span{
  display: inline-block;
  background: orange;
  margin: 10px;
}
</style>
