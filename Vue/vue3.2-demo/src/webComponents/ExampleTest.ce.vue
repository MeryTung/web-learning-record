<template>
<div class="mainbox">
 <div class="msg">{{ msg }}</div>
  <div>{{ user.name }}</div>
  <ul>
      <li v-for="item in list" :key="item.index">{{item.content}}</li>
  </ul>
</div>
</template>

<script>
export default {
    props:['msg','user','list'],
    setup(props){
      //  console.log(props)
        return {
            props
        }
    }
}
</script>

<style>
.mainbox { width:300px;margin:0 auto; padding:0}
li{ list-style:none;width:200px;border:1px solid #eee}
</style>