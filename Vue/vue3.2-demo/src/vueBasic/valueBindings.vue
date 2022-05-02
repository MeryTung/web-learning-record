<template>
<!-----
v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
text 和 textarea 元素使用 value property 和 input 事件；
checkbox 和 radio 使用 checked property 和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。------>
  <div class="valueBox">
      <p>message:{{msg}}<br/>age:{{age}}</p>
      <!-- <p><label>message:</label><input type="text" v-model.lazy="msg" /></p> -->
      <!----动过滤用户输入的首尾空白字符------>
      <p><label>message:</label><input type="text" v-model.trim="msg" /></p>
      <p><label>age:</label><input type="text" v-model.number="age" /></p>
      <input type="checkbox" name="" id="" v-model="toggle" true-value="yes" false-value="no">
      <input type="radio" name="" id="female" v-model="pick" :value="a" @change="changeGender">
      <label for="female">female</label>
      <input type="radio" name="" id="male" v-model="pick" :value="b"  @change="changeGender"> 
      <label for="male">male</label>
  </div>
</template>

<script>
export default {
    data(){
        return {
            toggle:true,
            pick:false,
            a:'female',
            b:'male',
            msg:'',
            age:null

        }
    },
    methods: {
        changeGender(e){
            console.log(e.target.value)
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>