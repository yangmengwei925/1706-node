<template>
  <div class="edit">
    <span>{{userid}}</span>
    <input type="text" v-model="user"/>
    <input type="text" v-model="pwd"/>
    <input type="text" v-model="phone"/>
    <select v-model="role">
      <option value="v0">超级管理员</option>
      <option value="v1">管理员</option>
      <option value="v2">访客</option>
    </select>
    <button @click="editIn()">提交</button>
    <button @click="$router.back()">返回</button>
  </div>
</template>
<script>
export default {
    data(){
        const {user,pwd,phone,role,userid} = this.$route.params
        return {
           user,
           pwd,
           phone,
           role,
           userid
        }
    },
    methods:{
      //预设一下空字段会弹出的对应文案
      txt(key){
          const txtType = {
              user:'用户名',
              pwd:'密码',
              phone:'电话号',
              role:'角色'
          }
          alert(txtType[key]+'不能为空')
      },
      async editIn(){
          const {user,pwd,phone,role,userid} = this
          //提交的数据
          let editData = {user,pwd,phone,role,userid}

          //校验非空
          let typeNull = Object.keys(editData).filter(item=>editData[item]==='')
   
          if( typeNull.length>0 ){
              this.txt(typeNull[0])
              return 
          }
          //请求编辑接口
          let data = await this.$axios('put','/list/edit',editData)
          alert(data.data.msg)
          
      }
    }
}
</script>