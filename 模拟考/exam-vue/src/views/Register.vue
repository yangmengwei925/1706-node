<template>
  <div class="login">
  <input type="text" v-model="user"/>
  <input type="text" v-model="pwd"/>
  <select v-model="role">
    <option value="v0">超级管理员</option>
    <option value="v1">管理员</option>
    <option value="v2">访客</option>
  </select>
  <button @click="registerIn()">注册</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      user:'',
      pwd:'',
      role:'v2'
    }
  },
  methods:{
    async registerIn(){
      const {user,pwd,role} = this
      const submitData = {user,pwd,role}

      if(user === ''){
          alert('用户名不能为空')
          return
      }
     
      if(pwd === ''){
          alert('密码不能为空')
          return
      }
      
      //请求注册接口
      let data = await this.$axios('post','/register/re',submitData)
      
      if(data.data.code === 0){
          alert(data.data.msg)
          this.$router.push('/login')
          return
      }
      alert(data.data.msg)
    }
  }
}
</script>

