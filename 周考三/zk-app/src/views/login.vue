<template>
  <div class="login">

  <van-field v-model="user" placeholder="请输入账号" />
 <van-field v-model="pwd" placeholder="请输入密码" />
 <van-button type="danger" @click="loginIn()">LOGIN IN</van-button>
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
    loginIn(){
      const {user,pwd} = this
        let obj = {user,pwd}

        if(user === ''){
            alert('账号不能为空')
            return
        }
        
        if(pwd===''){
          alert('密码不能为空')
          return
        }

        if(user.length <5){
            alert('账号长度至少为5')
            return
        }
      

        this.$axios('post','/login/login',obj).then(
          data=>{
            
            if(data.data.code === 1){
                alert(data.data.msg)
                return 
            }
            localStorage.setItem('sessionId',data.data.data.sessionId)
            this.$router.push('/home')
          }
        )


    }
  }
}
</script>
