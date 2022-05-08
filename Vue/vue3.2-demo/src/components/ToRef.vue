<template>
   <div>
       {{state.username}}---{{state.age}}
   </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    name:'ToRef',
    setup(){
        const state = reactive({
            username: '夜华',
            age:20
        })
        return {
            state
        }
    }
}
</script>

<style>

</style>