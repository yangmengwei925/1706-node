<template>
  <div class="home">
    <div class="l">
      <div>
        <router-link to="/home/work">工作台</router-link>
      </div>
      <div>
        <router-link to="/home/list">用户列表</router-link>
      </div>
    </div>
    <div class="r">
      <router-view/>
    </div>
    
  </div>
</template>
<style scoped>
.l{
  width: 20vw;
  float: left;
}
.r{
  width: 75vw;
   float: left;
}
</style>
