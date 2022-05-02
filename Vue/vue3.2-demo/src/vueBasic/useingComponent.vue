<template>
  <div class="usebox">
      <button class="btn" @click="add">
       Add {{counter}}
      </button>
        
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter:0
        }
    },
    methods:{
        add(){
            this.counter += 1
        }
    }
}
</script>

<style>
.usebox{margin-top:20px;}
</style>