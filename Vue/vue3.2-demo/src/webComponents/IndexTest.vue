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
    name:'IndexTest',
    setup(){
        const state = reactive({
            userName: '语录',
            msg:'着魔了，哈哈哈。。。',
            user:{name:'夜华'},
            list: [
                { id: 1, content: '我这个人一向爱恨分明，眼里容不下沙子，你若负了我，那些誓言便都不作数，我会弃了你，永不相见!' },
                { id: 2, content: '过去这须臾数年 我不过是经历了一场天劫罢了 既然这劫也已经过了 有些事情又何须记得' },
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