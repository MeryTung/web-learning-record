<template>
    <div class="item">
        user:{{user}}
        <slot :username="username"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'fontawesome.com'
        }
    },
    inject:['user']
}
</script>

<style>

</style>