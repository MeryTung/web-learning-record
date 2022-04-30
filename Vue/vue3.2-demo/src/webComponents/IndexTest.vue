<template>
  <!-- <my-vue-element :title='userName'>
      <slot name="named"></slot>
  </my-vue-element> -->
   <example-custom  .msg="msg" .user="user" .list="list"></example-custom>
</template>

<script>
import '../webComponents/index'
import { reactive,toRefs } from 'vue'
export default {
    setup(){
        const state = reactive({
            userName: '夜华',
            msg:'白浅',
            user:{name:'夜华'},
            list: [
                { id: 1, content: '夜华不识，姑娘竟是青丘白浅上神。' },
                { id: 2, content: '恭喜这位公子，你要做爹了。也恭喜这位姑娘，你要做娘了' },
            ]
        })
        return {
        ...toRefs(state)
        }
    }
}
</script>

<style>

</style>