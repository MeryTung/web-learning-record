<template>
  <div>
      <!-- {{username}} -->
      {{stateAsRefs.count}}
  </div>
</template>

<script>
import { reactive,toRefs } from 'vue'
export default {
    name:'toRefsTest',
    setup(){
        const state = reactive({
            // username:"夜华"
            count:10
        })
        // const { username } = toRefs(state)
        const stateAsRefs = toRefs(state)
        setTimeout(() => {
            stateAsRefs.count.value = 30
            console.log(stateAsRefs.count)
        },2000)
        return {
            // username
            stateAsRefs
        }
    }
}
</script>

<style>

</style>