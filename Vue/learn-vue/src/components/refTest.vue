<template>
   <div class="title" ref="temp">{{userRef}}---{{countRef}}</div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default {
    name:'refTest',
    setup(){
        const userRef = ref('夜华')
        const countRef = ref(0)
        const tempRef = ref(null)
        setTimeout(() => {
             userRef.value = '赵又廷'
         },2000)
        onMounted(()=>{ console.log(tempRef)})
        return {
            userRef,
            countRef,
            tempRef
        }
       
    }
}
</script>

<style>

</style>