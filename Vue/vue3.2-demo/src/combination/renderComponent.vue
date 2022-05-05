<template>
    <div class="myBox">
       {{observed}}
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    props:[''],
        setup(props,{ expose }){
            const observed = reactive({
                observed:1
            })
            const setObservedA = (value) => {  observed.a = value}
              expose({
                setObservedA
                })
            // return () => h('div', count.value)
            return {
                observed
            }
        }
}
</script>

<style>

</style>