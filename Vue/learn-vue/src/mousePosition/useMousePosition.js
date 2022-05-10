// import { ref,onMounted, onUnmounted } from 'vue'
// function useMousePosition(){
//     let x = ref(0)
//     let y = ref(0)
//     function update(e){
//         x.value = e.pageX 
//         y.value = e.pageY
//     }
//      onMounted(()=>{
//          console.log('onMounted updated useMousePositon')
//         window.addEventListener('mousemove',update)
//      })
//      onUnmounted(()=>{
//         console.log('onUnmounted uodated useMousePositon')
//         window.removeEventListener('mousemove',update)
//      })

//     return {
//         x,
//         y
//     }
// }

import { reactive,onMounted,onUnmounted, toRefs,/***toRefs****/ } from 'vue'
 function useMousePosition2(){
    const state = reactive({
        x:0,
        y:0
    })
    function update(e){
        state.x = e.pageX 
        state.y = e.pageY
    }
     onMounted(()=>{
         console.log(state)
         console.log('onMounted updated useMousePositon')
        window.addEventListener('mousemove',update)
     })
     onUnmounted(()=>{
        console.log('onUnmounted uodated useMousePositon')
        window.removeEventListener('mousemove',update)
     })  

    return  {
        ...toRefs(state)
    }
}
// export default useMousePosition
export default useMousePosition2