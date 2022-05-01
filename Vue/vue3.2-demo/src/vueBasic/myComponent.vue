<template>
    <li>
        {{item}}
        <button class="btn" @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
export default {
    props:['item','index'],
    emits:['remove']
}
</script>

<style>

</style>