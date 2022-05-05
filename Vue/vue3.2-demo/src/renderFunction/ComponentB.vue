<template>
   <component-a :level="1" :items="product">
       Hello world
   </component-a>
</template>

<script>
import ComponentA from '@/renderFunction/ComponentA.vue'
export default {
    components:{
        ComponentA
    },
    data(){
        return {
            title:'一分钟',
            bookTitle:'什么鬼啊',
            product:[
                {name:'西瓜',price:10},
                {name:'香蕉',price:5},
                 {name:'橘子',price:2},
                {name:'葡萄',price:1},
                 {name:'香瓜',price:3},
                {name:'菠萝',price:1.5},
                {name:'枇杷',price:20},
                {name:'苹果',price:5}
            ],
            
        }
        
    },
     mounted(){
    //    console.log('$dataB',this.$data)
   }
}
</script>

<style>

</style>