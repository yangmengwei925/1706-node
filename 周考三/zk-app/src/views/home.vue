<template>
   <div class="home">

     <router-view/>
     <span>首页</span>
     <span>动态</span>
     <span>留言</span>
     <span @click="$router.push('/home/my')">我的</span>

  </div>
</template>
<script>

</script>
