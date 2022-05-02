<template>
   <!-- <div class="form"> -->
       <!-- <p>{{title}}</p>
       <p class="font">{{message}}</p>
       <input type="text" :value="title" @input="title = $event.target.value" />
       <input type="text" v-model="message" placeholder="edit me" />
       <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <input type="checkbox" id="checkBox" v-model="checked"/><label for="checkBox">{{checked}}</label> -->
        <!-- <input type="checkbox" name="" value="Mark" id=""> -->
   <!-- </div> -->
   <div>
    <select name="" id="id1" v-model="selected">
      <option  disabled value=""> Please select one</option>
      <option> A</option>
      <option> B</option>
      <option> C</option>
      <option> D</option>
    </select>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // title:'hello',
            // message:'',
            // checked:false,
            selected:'',
        }
    },
    methods:{
        // changeTitle(event){
        //   this.title = event.target.value
        // }
    },
    created(){
        this.selected=""
    }
    
}
</script>

<style>
.font { font-size:20x; color:blue}
</style>