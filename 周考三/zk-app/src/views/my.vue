<template>
   <div class="re">
       <div v-if="!isshow" @click="isshow=true">编辑</div>
       <div>名字:<span>{{data.name}}</span></div>
       <div>个性签名:<input type="text" v-model="data.signs"/></div>
       <div>性别:<select v-model="data.sex">
            <option value="男">男</option>
            <option value="女">女</option>
        </select></div>
        <div>地址:<input type="text" v-model="data.address"/></div>
        <div>邮箱:<input type="text" v-model="data.email"/></div>
        <div>生日:<input type="text" v-model="data.birthday"/></div>
        <button v-if="isshow" @click="submitData()">提交</button>
  </div>
</template>

<script>
export default {
    data(){
       return { 
           isshow:false,
           data:{ }
          
       }
    },
    created(){
        this.$axios('get','/user/user').then(data=> {
            this.data = {...data.data.data}
            // Object.keys(data.data.data).forEach(item=>{
            //     if(this[item]!==undefined){
            //         this[item] = data.data.data[item]
            //     }     
            // })

        })  
    },
    methods:{
        submitData(){
            this.$axios('put','/user/edit',{...this.data}).then(data=>{
                console.log(data)
                if(data.data.code===0){
                    this.data = {...data.data.data[0]}
                    this.isshow = false
                }
                   
            })
            

        }
    }
}
</script>