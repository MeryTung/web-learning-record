<template>
  <div></div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(props, {expose }) {
    const observed = reactive({
      a: 1
    })
    function setObservedA(value) {
      observed.a = value
    }
    expose({
      setObservedA
    })
    return {
      observed,
    }
  }
}
</script>

<style>

</style>