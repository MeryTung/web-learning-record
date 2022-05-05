<template>
    <div class="sigleBox">
        {{title}}
    </div>
</template>

<script>
import { toRef } from 'vue'
export default {
    props:['title'],
    setup(props,context){
        //如果title是可选的prop,我们传入props有可能没有title
        //在这种情况下toRefs不会为title创建ref，我们就需要自己创建
        const  title = toRef(props,'title')
        console.log(context)
         console.log(title.value)
    }
}
</script>

<style>

</style>