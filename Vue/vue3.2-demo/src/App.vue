<template>
  <div class="mainbox" v-if="flag">
    <!-- <life-cycle-a :msg="songName"></life-cycle-a> -->
    <!-- <life-cycle-b :msg="songName"></life-cycle-b>
    <button @click="changeHandler">change msg</button> 
    <button @click="changeHandlerFlag">change flat</button> -->
    <!-- <ref-component></ref-component> -->
    <to-ref></to-ref>
  </div>
</template>

<script>
// import LifeCycleA from '@/LifeCycleA.vue'
// import LifeCycleB from '@/LifeCycleB.vue'
// import RefComponent from '@/components/RefComponent.vue'
import ToRef from '@/components/ToRef.vue'
export default {
  name: 'App',
  components: {
    // LifeCycleA 
    // LifeCycleB 
    // RefComponent
    ToRef
  },
  data(){
    return {
     songName:'说走就走',
      blogTitle:'什么鬼阿',
      flag:true,
       posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
     
    }
  },
  methods: {
    changeHandler(){
      this.songName = 'Hello,Vue' + new Date()
    },
    changeHandlerFlag(){
      this.flag =  !this.flag
    }
  },
   computed: {
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
li{
  list-style: none;
}
</style>
