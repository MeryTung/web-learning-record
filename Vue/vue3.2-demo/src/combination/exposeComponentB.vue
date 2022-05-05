<template>
 <div>
  <button @click="addMethods">Add+1</button>
   <exposeComponentA ref="total"></exposeComponentA>
 </div>

</template>

<script>
import exposeComponentA from '@/combination/exposeComponentA.vue'
import { ref,onMounted } from 'vue'
export default {
    components:{
        exposeComponentA
    },
    setup(){
     var total = ref(null)
     let addMethods = () =>{
         console.log('点击了我啦')
         total.value.increment()
     }

     onMounted(()=>{
         console.log(total.value.increment)
         console.log(addMethods)
     })
     return {
         total,addMethods
     }
    }
    }
</script>

<style>

</style>