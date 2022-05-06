<template>
<div class="main">
<counter-a></counter-a>
</div>
 
</template>

<script>
import CounterA from '@/components/ComponentA.vue'

export default {
  name: 'App',
  components:{CounterA},
  data(){
    return {
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
