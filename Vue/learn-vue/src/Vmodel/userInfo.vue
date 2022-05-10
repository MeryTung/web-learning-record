<template>
  <p>{{name}}---{{age}}</p>
  <input :value="name" @input="$emit('update:name',$event.target.value)" />
  <input :value="age" @input="$emit('update:age',$event.target.value)" />
</template>

<script>
export default {
    props:{
        name:String,
        age:String,
    },
    setup(){

        return {
            
        }
    }
    
}
</script>

<style>

</style>