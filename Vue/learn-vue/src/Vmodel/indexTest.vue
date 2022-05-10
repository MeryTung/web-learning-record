<template>
  <user-info v-model:name="name" v-model:age="age"></user-info>
</template>

<script>
import { reactive,toRefs } from 'vue'
import userInfo from './userInfo.vue'
export default {
  components: { userInfo },
  setup(){
      const state = reactive({
          name:'夜华',
          age: '20'
      })
      return {
          ...toRefs(state)
      }
  }
}
</script>

<style>

</style>