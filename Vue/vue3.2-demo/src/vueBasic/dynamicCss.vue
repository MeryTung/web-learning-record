<template>
<!-- <div> -->
<!---绑定HTMLcss--->
<!---对象语法start--->
<!---内联定义在模板上--->
  <!-- <div :class="{active:isActive,'text-danger':hasError}" class="title">{{title}}</div> -->
  <!--全部放在一个对象上--->
   <!-- <div :class="classObject" class="title">{{title}}</div>
   <button class="btn" @click="changeError">标题变色</button> -->
<!---对象语法end--->
<!---数组语法start--->
    <!-- <div :class="[activeClass,errorClass]" class="title">{{title}}</div> -->
    <!----也可以用三元运算符---->
    <!-- <div class="title" :class="[isActive?activeClass:'',errorClass]">{{title}}</div> -->
    <!----多个条件都用三元运算符，有点麻烦，所以数组语法中也可以用对象语法---->
        <!-- <div class="title" :class="[{active:isActive},errorClass]">{{title}}</div> -->
   <!-- </div> -->
   <!---对象/数组语法都可以在组件上使用--->
   <!-- <HtmlCss class="baz foo"  :class="{active:isActive}" /> -->
   <HtmlCss class="baz foo"  :class="[activeClass,errorClass]" />
</template>

<script>
import HtmlCss from './HtmlCss.vue'
export default {
    components:{
        HtmlCss
    },
     data(){
         return {
             //全部放在一个对象上
            //  classObject:{
            //      isActive:true,
            //      hasError:false
            //  },
            //内联定义在模板上
             isActive:true,
            //  hasError:true,
            //  isActive:true,
            //  error:null,
            activeClass:'active',
            errorClass:'error',
             title: '赵又廷'
         }
     },
     methods:{
        //  changeError(){
        //      this.error = !this.error
        //  }
     },
     computed:{
        //  classObject(){
        //      return {
        //          active: this.isActive && !this.error,
        //          'text-danger': this.error && this.error.type === 'fatal'
        //      }
        //  }
     }
}
</script>

<style>
.title{ font-size:18px; font-weight:bold;width:300px; margin:0 auto; padding:0}
.active{ color:green}
.error{border:1px solid red}
</style>