<template>
<div>
    <!-- <ul class="box">
        <li v-for="item in items" :key="item.id">
            {{item.message}}----{{item.username}}
        </li> -->
        <!----v-for里使用遍历一个对象---name为键名,value为对象值--->
        <!-- <li v-for="(value,name,index) in myObject" :key="index">
           {{name}}: {{value}}
        </li> -->
        <!-- <li v-for="(num,index) in eventNumber" :key="index">
            {{num}}
        </li>
       
    </ul>
     <ul v-for="(num,index) in sets" :key="index">
            <li v-for="n in even(num)" :key="n">
                    {{n}}
            </li>
        </ul> --> 
        <!-- <div class="range">
            <span v-for="n in 10" :key="n">
                {{n}}
            </span>
        </div> -->
        <!-- <ul>
            <template v-for="item in items" :key="item.id">
                <li>  {{item.message}}</li>
            </template>
        </ul> -->
<!----在组件中使用v-for----->
    <div class="addBox">
        <p><label>角色：</label><input type="text" v-model="newItemText" /></p> 
        <p><label>演员名:</label><input type="text" v-model="newItemName" /></p>
        <button @click="addItem">添加演员</button>
    </div>
    <myComponent  v-for="(item,index) in items" :key="item.id" :index="index" :item="item.message" @remove="items.splice(index,1)"/>

</div>
</template>

<script>
import myComponent from '@/vueBasic/myComponent.vue'
export default {
    components:{ myComponent },
    data(){
        return{
            myObject:{
                title: '三生三世十里桃花',
                username: 'Mark',
                actor: '夜华',
                
            },
            items:[
                {id:1,message:'夜华',username: 'Mark'},
                {id:2,message:'白浅',username: 'Yangmi'},
                ],
                nextItemId:3,
                newItemText:'',
                newItemName:'',
            numbers: [ 1, 2, 3, 4, 5 ],
            sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
        }
    },
    methods: {
        even(numbers){
          return   numbers.filter(number=>number%2)
        },
        addItem(){
            this.items.push({
                id:this.nextItemId++,
                message:this.newItemText,
                username:this.newItemName
            })
        }
    },
    computed:{
        eventNumber(){
            return this.numbers.filter(item=>item%2)
        }
    },
    mounted(){
        // this.items.push( {id:3,message:'hahah',username: 'Zhao YouTing'},)
        // this.items = this.items.filter(item => item.message.indexOf('夜华')>-1)
    }
}
</script>

<style>
li{ list-style: none}
.addBox{ margin-bottom:20px;}
</style>