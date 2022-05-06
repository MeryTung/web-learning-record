<template>
  <div class="componentBox">
      <!-- {{count}} -->
      {{countAlias}}
      <button @click="addCount">Add+1</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    computed:{...mapState({countAlias:'count'})},

    methods:{
            ...mapMutations({
                addCount:'ADD_COUNTER'
            })
    }
}
</script>

<style>

</style>