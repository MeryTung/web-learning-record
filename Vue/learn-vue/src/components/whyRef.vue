<template>
  <div>
      {{ageRef}}----{{age}}
  </div>
</template>

<script>

import { /***ref,****/ computed } from 'vue'
export default {
    name: 'whyRef',
    setup(){
        // let ageRef = ref(0)
        let ageRef = 10
        let age = computed(()=> ageRef)
        setTimeout(()=> 
        {
           console.log(age)
        }
        ,2000)
        return {
            ageRef,
            age
        }
    }
}
</script>

<style>

</style>