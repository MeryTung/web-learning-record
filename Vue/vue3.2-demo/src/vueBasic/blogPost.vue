<template>
   <div class="blog">
      <!-- <h4>{{title}}</h4> 
      <button @click="$emit('enlargeText',0.1)"> Enlarge text</button> -->
      <h4>{{title}}</h4>
      <input type="text" v-model="username" />
      <button @click="$emit('changeTitle',username)">点击更改标题</button>
    </div>
</template>

<script>
export default {
    props:['title'],
    emits:['enlargeText','changeTitle'],
    data(){
        return {
          username:'Mark'  
        }
    }
}
</script>

<style>

</style>