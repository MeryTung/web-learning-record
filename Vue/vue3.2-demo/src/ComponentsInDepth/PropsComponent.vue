<template>
   <div class="propBox">
    <p> {{title}}</p>
    <p>{{likes}}</p>
    <p>{{test}}</p>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{item.title}}
        </li>
    </ul>
   </div>
</template>

<script>
import Person from '~/utils/index.js'
export default {
        props:{
            title:String,
            likes:{
                type:Number,
                default:100
            },
            list:Object,
            test:Person
        },
        data(){
            return {

            }
        }
}
</script>

<style>

</style>