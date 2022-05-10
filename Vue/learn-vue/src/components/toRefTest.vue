<template>
  <div class="container">
      {{state.userName}}---{{state.age}}---{{state.like}}
  </div>
</template>

<script>
import { reactive,toRef } from 'vue'
export default {
    name:'toRefTest',
    setup(){
        const state = reactive({
            userName: '赵又廷',
            age: 30
        })
         const like = toRef(state,'like')
        setTimeout(() =>
        {
            // userName.value = '夜华'
            like.value = '夜华'
        },3000)
        return {
            state
        }
    }
}
</script>

<style>

</style>