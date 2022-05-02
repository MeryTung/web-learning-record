<template>
   <div class="modelBox">
       <p>歌名：{{modelValue}}</p>
       <input type="text" class="" v-model="song" />
       <button @click="changeValue">自定义歌名</button>
   </div>
</template>

<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    data(){
        return {
            song:''
        }
    },
    methods:{
        changeValue(){
            this.$emit('update:modelValue',this.song)
        }
    }
}
</script>

<style>

</style>