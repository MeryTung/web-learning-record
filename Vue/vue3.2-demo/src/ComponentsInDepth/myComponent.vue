<template>
   <div class="eventBox">
       <!-- {{title}} -->
       <!-- <button @click="changeName">haha,改变歌名</button> -->
      <!-- <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"  /> -->
       <!-- <input type="text" :value="modelValue" @input="emitValue"> -->
      <input type="text" :value="description" @input="$emit('update:description',$event.target.value)">
   </div>
</template>

<script>
export default {
    // props:['title','modelValue'],
    props:['description','descriptionModifiers'],
    emits:['update:description'],
//     props:{
//         modelValue:String,
//         modelModifiers: {
//       default: () => ({})
//     }
//     },
//     emits:['myEvent','update:modelValue'],
//     data(){
//         return {

//         }
//     },
//     methods:{
//         changeName(){
//             this.$emit('myEvent','hello')
//         },
//         emitValue(e){
//             let value = e.target.value
//             if(this.modelModifiers.capitalize){
//                 value = value.charAt(0).toUpperCase() + value.slice(1)
//             }
//             this.$emit('update:modelValue',value)

//         }
//     },
//     created() {
//     console.log(this.modelModifiers) // { capitalize: true }
//   }
//对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：
        created(){
            console.log('123',this.descriptionModifiers)
        }
}
</script>

<style>

</style>