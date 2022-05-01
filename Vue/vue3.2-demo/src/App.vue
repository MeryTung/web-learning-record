<template>
<div>
  <!-- <IndexTest />
  <DataProperty /> -->
  <!-- <TreeShaking /> -->
  <!-- <ComputedWatch /> -->
  <dynamicCssStyle />
  
</div>
</template>

<script>
// import IndexTest from '@/webComponents/IndexTest.vue';
// import DataProperty from '@/vueBasic/DataProperty.vue';
// import TreeShaking from  '@/vueBasic/TreeShaking.vue'
// import ComputedWatch from '@/vueBasic/ComputedWatch.vue'
import dynamicCssStyle from '@/vueBasic/dynamicCssStyle.vue'

export default {
  name: 'App',
  components: {
    // IndexTest,
    // DataProperty,
    // TreeShaking
    // ComputedWatch,
    dynamicCssStyle 
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
