<template>
   <div class="lifeCycle">
       {{msg}}
   </div>
</template>

<script>
import { onBeforeMount ,onMounted,  onBeforeUpdate,onUpdated, onBeforeUnmount,onUnmounted  } from 'vue'
export default {
    props:['msg'],
    setup(){
        onBeforeMount(()=>{
            console.log('onBeforeMount')
        })
        onMounted(()=>{
            console.log('onMounted')
        })
        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })
        onUpdated(()=>{
            console.log('onUpdated')
        })
        onBeforeUnmount(()=>{
            console.log('beforeUnmount')
        })
        onUnmounted(()=>{
            console.log('onUnmount')
        })
    }
}
</script>

<style>

</style>