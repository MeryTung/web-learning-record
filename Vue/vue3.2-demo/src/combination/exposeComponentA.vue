<template>
    <div>
        <p>显示父组件点击按钮后，count的变化</p>
        <p>{{count}}</p>
   </div>
    
</template>

<script>
import { ref } from 'vue'
export default {
    setup(props,{expose}){
        const count = ref(1)
        const increment = () => count.value +=1
       expose({
           increment
       }) 
       return {
           count,increment  
       }
    }
}
</script>

<style>

</style>