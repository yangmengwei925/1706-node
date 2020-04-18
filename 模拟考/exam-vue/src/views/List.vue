<template>
  <div class="list">
    <!-- 表头 -->
    <div>
      <span>用户Id</span>
      <span>用户账号</span>
      <span>用户电话</span>
      <span>用户角色</span>
      <span>操作</span>
    </div>
    <!-- 列表内容 -->
    <div v-for="item in list" :key="item.userid">
      <span>{{item.userid}}</span>
      <span>{{item.user}}</span>
      <span>{{item.phone}}</span>
      <span>{{item.role}}</span>
      <span>
        <button @click="deleteItem(item.userid)">删除</button>
        <button @click="$router.push({name:'edit',params:item})">编辑</button>
      </span>
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
  async created(){
    //页面初始化获取数据
    let  data = await this.$axios('get','/list/list')
    this.list = data.data.data
  },
  methods:{
    //点击删除按钮
    async deleteItem(userid){
        let results = window.confirm('确定要删除吗？')

        //window.confirm 点击确定会返回true 点击取消会返回false
        //根据返回结果判断
        if(results){
            let data  = await this.$axios('delete','/list/delete',{userid})
            if(data.data.code === 0){
                  alert(data.data.msg)
                  this.list = data.data.data
                  return
            }
            alert(data.data.msg)
            
        }
    }
  }
}
</script>
<style scoped>
.list div{
  width: 100%;
}
.list div span{
    float: left;
    width: 20%;
    height: 40px;

  }
</style>