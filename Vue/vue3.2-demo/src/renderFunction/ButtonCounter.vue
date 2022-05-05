<template>
<div class="form">
    
   <input  type="text" 
    :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"/>
   <button class="btn" @click="addList">Add</button>
   {{modelValue}}
   <ul>
       <li v-for="(todo,index) in todoList" :key="index">{{todo}}</li>
       </ul>
</div>
  
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data(){
        return {
            todoList:[],
            bookTitle:''
        }
    },
    methods:{
        addList(){
            this.todoList.push(this.modelValue);
        }
    },
    computed:{
    //     value:{
    //     get(){
    //         return this.modelValue
    //   },
    //   set(value) { 
    //     return  this.$emit('update:modelValue',value)
    //   }
    //     } 
    }
}
</script>

<style>

</style>