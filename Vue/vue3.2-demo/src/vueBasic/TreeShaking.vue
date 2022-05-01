<template>
    <div>
     
    <button @click="btnclick3">防抖</button>
    <button @click="btnclick">节流</button>
    </div>
</template>

<script>
import _  from "lodash";
export default {
     data(){
           return {
               count:10
           }
       },
  created() {
      //防抖
    this.btnclick3 = _.debounce(this.click, 1000)
    //节流
    this.btnclick = _.throttle(this.clickThrottle, 1000)
  },
  unmounted() {
    this.btnclick3.cancel()
    this.btnclick4.cancel()
  },
  methods: {
    click() {
        this.count++
      console.log(this.count)
    },
    clickThrottle(){
        this.count++
        console.log(this.count)
    }
  }
}
</script>

<style>

</style>