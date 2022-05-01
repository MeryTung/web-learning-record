<template>
<div class="mainbox">
 <div class="computer">
     <p> Has published books</p>
    <span> {{publishMessage}}</span>
    <p>当前的时间为：{{now}}</p>
    <p>实时：{{changeNow()}}</p>
    <p>姓：{{firstName}},名：{{lastName}}。全名：{{fullName}}</p>
    <input type="text" v-model="fullName" />
  </div>
  <div class="watch">
      <!-- <p> Ask a yes/no question: 
          <input type="text" v-model="question" />
          </p>
      <p>{{answer}}</p> -->
      <p><input type="text" v-model="dramaTitle" /></p>
      <p>{{actor}}</p>
  </div>
</div>
 
</template>

<script>
// import axios from "axios"
export default {
    data(){ 
        return {
            firstName: '赵',
            lastName: '又廷',
            dramaTitle:'',
            actor:'猜猜是哪位明星',
            author: 
            {
                username:'夏明',
                books:[
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
                    ]
            }
        }
        },
    methods:{
        changeNow(){
            return new Date()
        },
        getActor(val){
            if(val==this.author.username){
                this.actor ="恭喜你，猜对了"
            }
        }
        
    },
    computed:{
        fullName:{
            get(){
                return this.firstName + '' + this.lastName
            },
            set(value){
                [this.firstName, this.lastName] = value.split(' ')
            }
        },
        publishMessage(){
        return  this.author.books.length>0?'Yes':'No'
        },
        now(){
            return new Date()
        }
  },
  watch:{
      //响应式观察改变的参数
     dramaTitle(newVal,oldVal){
         if(newVal!==oldVal){
             this.getActor(newVal)
         }
     }
  }
}
</script>

<style>

</style>