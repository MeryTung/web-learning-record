<template>
    <div>
        <div class="databox">
        {{count}}
    </div>
    <button class="btn" @click="increment">click +1</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count: 4
        }
    },
    methods:{
        increment(){
            this.count += 1;
        }
    }
}
</script>

<style>

</style>