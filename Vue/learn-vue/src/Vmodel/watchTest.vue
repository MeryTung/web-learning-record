<template>
  watch VS watchEffect
  <p>{{numberRef}}</p>
 <p>{{name}}  {{age}}</p>
</template>

<script>
import { ref,reactive,toRefs,/***watch,****/ watchEffect,onMounted } from 'vue'
export default {
    setup(){
        const numberRef =ref(0)
        const state = reactive({
            name: '夜华',
            age: 20,
            item:[
                {a:1,b:2,c:3}
            ]
        })
        
        onMounted(()=> {

            const ordianry = {...toRefs(state)}
            console.log('state',state)
            console.log('ordianry',ordianry)
            setTimeout(() =>{
            // state.item[0].a = 30;
            ordianry.age.value = 40
            console.log(ordianry)
        },2000)
        })
        //watchEffect
        watchEffect(()=>{
            //初始化一定会执行一次watchEffect监听
            // console.log('state.age',state.age)
           
        })
       


        //watch示例
        // watch(
        //     //第一个参数是需要监听的参数，
        //     numberRef,
        //     //第二个数是回调函数
        //     (newnum,oldnum)=>{
        //     console.log('numberRef',newnum,oldnum)
        // })
        // watch(()=>state.item,(newItem,oldItem)=>{
        //     console.log('item',newItem,oldItem)
        // },{
        //     deep:true  //深度监听
        // })
        // setTimeout(()=>{
        //     state.item[0].a = 10
        // },3000)
        // watch(()=>state.age,(newAge,oldAge)=>{
        //         console.log('age',newAge,oldAge)
        // })
        // setTimeout(() =>{
        //     state.age = 40
        // },3000)
        // watch(()=>state.name,(newName,oldName)=>{
        //     console.log('name',newName,oldName)
        // },
        // {
        //     immediate:true //初始化之前监听，可选
        //     })
        // setTimeout(() =>{
        //     numberRef.value = 30
        // },2000)
        return {
            numberRef,
            ...toRefs(state)
        }
    }
}
</script>

<style>

</style>