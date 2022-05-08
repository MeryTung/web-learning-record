<template>
    <div class="myBox">
        <p>{{title}}</p>
        <li v-for="(post,index) in posts" :key="index">
            {{post.id}}---{{post.title}}
        </li>
    </div>
</template>

<script>
import { ref,reactive,toRefs } from 'vue'
export default {
    props:['posts'],
        setup(props){
            const { posts } = toRefs(props)
            const readerNumber = ref(0)
            const state = reactive({ title: 'Set Up with Vue.js' })
            console.log(posts)
            return {
                ...toRefs(state),
                readerNumber
            }
        }
}
</script>

<style>

</style>