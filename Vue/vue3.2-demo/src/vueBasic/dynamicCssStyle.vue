<template>
<div>
<!---绑定HTMLcss--->
<!---内联定义在模板上--->
  <!-- <div :class="{active:isActive,'text-danger':hasError}" class="title">{{title}}</div> -->
  <!--全部放在一个对象上--->
   <div :class="classObject" class="title">{{title}}</div>
   <button class="btn" @click="changeError">标题变色</button>
   </div>
</template>

<script>
export default {
     data(){
         return {
             //全部放在一个对象上
            //  classObject:{
            //      isActive:true,
            //      hasError:false
            //  },
            //内联定义在模板上
            //  isActive:true,
            //  hasError:true,
             isActive:true,
             error:null,
             title: '赵又廷'
         }
     },
     methods:{
         changeError(){
             this.error = !this.error
         }
     },
     computed:{
         classObject(){
             return {
                 active: this.isActive && !this.error,
                 'text-danger': this.error && this.error.type === 'fatal'
             }
         }
     }
}
</script>

<style>
.title{ font-size:18px; font-weight:bold}
.active{ color:green}
</style>