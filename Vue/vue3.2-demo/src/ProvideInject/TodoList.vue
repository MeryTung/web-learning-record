<template>
<div class="list">
  <div>{{todos.length}}</div>
        <todo-item v-slot="{username}">
            <h2>Welcome to the Font {{username}} Docs</h2>
            <p>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting started, styling guides to add some flair, and deeper dives for fine-tuning Font Awesome to suit your needs.</p>
        </todo-item>
</div>     
</template>
<script>
import TodoItem from '@/ProvideInject/TodoItem.vue'
export default {
            data(){
                return {
                    todos:['夜华','白浅']
                }
            },
            components:{
                TodoItem
            }
}
</script>

<style>

</style>