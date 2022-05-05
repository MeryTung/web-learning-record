<template>
  <ComponentA ref="compa" />
</template>

<script>
import { ref ,onMounted } from 'vue'
import ComponentA from '@/combination/componentA.vue'
export default {
    components:{
        ComponentA
    },
 setup() {
    const compa  = ref(null)
    onMounted(() => {
      // comp-a 调用 expose 之后, 父组件 ref 拿到的结果为调用 expose 时的参数。而不再是组件实例了
      compa.value.setObservedA(10)
    })
    return {
       compa
    }
  }
}
</script>

<style>

</style>