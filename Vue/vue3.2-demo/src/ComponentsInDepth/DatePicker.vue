<template>
   <div class="dateBox">
       hello,hahha 
       <!----设置了v-bind="$attrs" 指定绑定位置后，attribute不会自动绑定在根目录下了----->
     <select v-bind="$attrs">
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
   </div>

</template>

<script>
export default {
    inheritAttrs: false,
// created() {
//     console.log(this.$attrs) // { onChange: () => {}  }
//   }
}
</script>

<style>

</style>