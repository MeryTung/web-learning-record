<template>
  <div class="position">
      X: {{x}}
      Y: {{y}}
     
  </div>
</template>

<script>
// import useMousePosition from '@/mousePosition/useMousePosition'
import {onMounted} from 'vue'
import useMousePosition2 from '@/mousePosition/useMousePosition'
export default {
    name:'indexTest',
    setup(){
    //     const { x,y } = useMousePosition()
    //     return {
    //         x,
    //         y,
    //     }
    const {x,y} = useMousePosition2()
    onMounted(()=>{ console.log('x',x)})
    return {
        x,y
    }
    }
}
</script>

<style>

</style>