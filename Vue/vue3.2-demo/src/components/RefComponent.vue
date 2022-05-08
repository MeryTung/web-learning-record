<template>
   <div class="title" ref="temp">{{ageRef}}---{{nameRef}}</div>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
    setup(){
        const ageRef = ref(20)
        const temp = ref(null)
        const  nameRef = ref('赵又廷')
        const state = reactive({
             userName: nameRef,
        })
        setTimeout(() => {
            // console.log('ageRef',ageRef.value)
            console.log('temp',temp.value)
            nameRef.value = '夜华'
        },2000)
        return {
            ageRef,
            nameRef,
            state,
            temp
        }
    }
}
</script>

<style>

</style>