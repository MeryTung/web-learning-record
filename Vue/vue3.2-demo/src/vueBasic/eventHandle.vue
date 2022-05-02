<template>

<div class="wrap">
   <!-- <div class="eventBox" @click="evenBox"> -->
       <!----这里eventBox事件点击了红色框内才会被执行，直接点击button是不会被执行的---->
       <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
       <div class="eventBox"  @scroll.prevent="evenBox">
       <!----j监听事件------->
        <!-- <button @click="counter+=1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p> -->
        <!----事件处理方法----->
        <!-- <button @click="greet">Greet</button> -->
        <!---内联处理器中的方法----->
        <!-- <button class="btn" @click="say('Hi',$event)">say Hi</button>
        <button @click="say('Bye',$event)">say Bye</button> -->
        <!-----多事件处理------>
        <!-- <button @click="one($event),two($event)">多事件处理</button> -->
        <!------事件修饰符------>
        <!-----阻止向上冒泡------>
        <!-- <button @click.stop="doThis">事件修饰符</button> -->
        <!---阻止默认的多选事件---->
        <!-- <input type="checkbox" @click.stop.prevent="doPrevent" /> -->
        <!-- <button class="btn" @click="doThat">click</button> -->
          <!-- <button class="btn" @click="doSelf($event)">click</button> -->
          <li v-for="item in items" :key="item.id" class="itemList">
              {{item.username}}
          </li>
  
   <div class="keyup">
       <p>{{username}}</p>
       <input @keyup.enter="submit"/>
       <input type="text" @keyup.ctrl.enter="say">
   </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            counter:0,
            username: '夜华',
            items: [
                {id:1,username: '夜华'},
                {id:2,username:'白浅'},
                {id:3,username:'墨渊'},
                {id:4,username:'折颜'},
                {id:5,username:'凤九'},
                {id:6,username:'白真'},
                {id:7,username:'帝君'},
                ],
        }
    },
    methods:{
        greet(event){
            console.log(this.username)
            if(event){
                console.log(event.target.tagName)
            }
        },
        submit(e){
            console.log(e.target.value)
        },
        say(val,event){
           console.log(`say ${val}`)
           if(event){
               event.preventDefault()
           }
        },
        one(event){
            console.log('one 事件执行')
            event.preventDefault()
        },
        two(event){
            console.log('two 事件执行')
            event.preventDefault()
        },
        doThis(){
            console.log('阻止向上冒泡')
        },
        evenBox(){
            console.log(`evenBox事件`)
        },
        doPrevent(){
            console.log(`Sorry,you don't click me`)
        },
        doThat(){
            console.log('添加事件监听时，使用捕获事件模式')
        },
        doSelf(event){
            console.log(event.target)
            console.log(`只是event.target当是当前元素自身触发处理函数`)
        }
    }
}
</script>

<style>
html,body{height:100%}
.wrap{background-color:red;height: 100%;width:90%;
}
.eventBox{height:300px;overflow-y:scroll}
.itemList{height:200px;list-style: none; background-color:green}
</style>