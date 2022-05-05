<template>
   <custom-input :model-value="searchText" @update:model-value="searchText = $event"></custom-input>
</template>

<script>
import CustomInput from '@/renderFunction/CustomInput.vue'
export default {
    components:{
        CustomInput
    },
    data(){
        return {
            searchText:'父组件传给子组件props'
        }
    }
}
</script>

<style>

</style>