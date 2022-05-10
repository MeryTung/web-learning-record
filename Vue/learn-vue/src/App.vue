<template>
    <!-- <why-ref></why-ref>
    <hello-world @sayHello="sayHello"></hello-world> -->
    <!-- <index-test  v-if="flag"></index-test>
     <button @click="changeHandlerFlag">change flag</button> -->
     <!-- <index-test></index-test> -->
     <!-- <get-instance></get-instance> -->
     <watch-test></watch-test>
</template>

<script>
// import whyRef from '@/components/whyRef.vue'
// import HelloWorld from '@/components/HelloWorld'
import { reactive,toRefs } from 'vue'
import WatchTest from '@/Vmodel/watchTest.vue'
// import indexTest from '@/Vmodel/indexTest.vue'
// import GetInstance from '@/Vmodel/getInstance.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // whyRef
    // indexTest,
    // GetInstance
    WatchTest
  },
  setup(){
      const state = reactive({
              flag:true
      })
      const changeHandlerFlag =()=> {
            state.flag = !state.flag;
     }
      const sayHello = (info) => {
      console.log('say',info)
    }
    return {
      ...toRefs(state),
      changeHandlerFlag,
      sayHello
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
