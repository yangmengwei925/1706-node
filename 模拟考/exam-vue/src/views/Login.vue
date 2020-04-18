<template>
  <div class="login">
  <input type="text" v-model="user"/>
  <input type="text" v-model="pwd"/>
  <button @click="loginIn()">登录</button>
  <p @click="goRegister()">没有账号，去注册</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      user:'',
      pwd:''
    }
  },
  methods:{
    async loginIn(){
      const {user,pwd} = this
      const submitData = {user,pwd}

      if(user === ''){
          alert('用户名不能为空')
          return
      }
     
      if(pwd === ''){
          alert('密码不能为空')
          return
      }

      //请求登录接口
      let data = await this.$axios('post','/login/login',submitData)
      if(data.data.code === 0){
        alert('登录成功')
        localStorage.setItem('token',data.data.data.token)
        this.$router.push('/home')
        return
      }
      alert(data.data.msg)
    },
    //去注册页面
    goRegister(){
      localStorage.clear()
      this.$router.push('/register')
    }
  }
}
</script>
