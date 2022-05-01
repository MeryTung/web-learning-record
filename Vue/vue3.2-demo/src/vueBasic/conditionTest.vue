<template>
   <!-- <div class="condition" v-if="Math.random() > 0.5">
       <p v-if="show">{{title}}</p>
       <p v-else>哈哈哈，墨渊</p>
   </div>
   <div v-else>
       Now you don't
   </div> -->
   <!----v-if/v-else-if/v-else--->
   <!-- <div v-if="type=== 'A'">
       A
   </div>
   <div v-else-if=" type=== 'B'">
       B
   </div>
    <div v-else-if=" type=== 'C'">
       C
   </div>
    <div v-else>
      D
   </div> -->
   <!---v-if惰性的，if初始值----->
   <!---v-show不管条件是什么，元素都会被渲染出来，且只是简单的css进行切换---->
   <!--不建议v-if和v-for一起使用，v-if比v-for优先级更高--->
   <h3 v-show="show">{{title}}</h3>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            title:'夜华',
            ok:false,
            type:'E'
        }
    }
}
</script>

<style>

</style>