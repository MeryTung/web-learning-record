<template>
    {{x}}---{{y}}
</template>

<script>
import { onMounted,getCurrentInstance } from 'vue'
export default {
    data(){
        return {
            x:1,
            y:2
        }
    },
    setup(){
        const instance = getCurrentInstance()
        onMounted(()=>
        { 
            console.log('this1',this)
            console.log('instance',instance)
            }
            )
      console.log('this2',this)
      
    },
    mounted(){
        console.log('Option API this',this)
        console.log(this.y)
    }

}
</script>

<style>

</style>