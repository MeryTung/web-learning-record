<template>
<!---对象语法--->
   <!-- <div :style="{fontSize: fontSize + 'px', color: activeColor}"> -->
    <!-- <div :style="styleObject">
       三生三世十里桃花好看吗?
   </div> -->
   <!---数组语法,可以将多个样式对象用在同一个元素---->
   <!-- <div :style="[styleObject,activeObject]">三生三世十里桃花好看吗?</div> -->
   <!---多重值,包含多个值的数组，常用于提供多个带前缀的值--->
   <div :style="{ display: ['-webkit-box','-ms-flexbox','flex']}">三生三世十里桃花好看吗?</div> 

</template>

<script>
export default {
    data(){
        return{
            fontSize: 20,
            activeColor: 'red',
            styleObject:{
               fontSize: '20px',
               color: 'red', 
            },
            activeObject:{
               textDecoration:'underline'
            }
        }
    }
}
</script>

<style>

</style>