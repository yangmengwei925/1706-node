<template>
  <div class="home">
    <div v-for="(item,index) in list" :key="index" @click="$router.push({name:'about',params:item})">
        <span>{{item.sort}}</span>
         <span>{{item.name}}</span>
          <span>{{item.hot}}</span>
          <span>{{item.values}}</span>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      list:[]
    }
  },
  beforeCreate(){
    this.$axios.post('/list').then(data=>{
      console.log(data.data.data)
        this.list = data.data.data
    })
  }
}
</script>
