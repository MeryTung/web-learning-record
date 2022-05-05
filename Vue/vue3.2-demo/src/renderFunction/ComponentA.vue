<script>
import { h } from 'vue'
import ButtonCounter from '@/renderFunction/ButtonCounter.vue'
export default {
    components:{
        ButtonCounter 
    },
//      props: {
//         level: {
//         type: Number,
//         required: true
//         },
//         items:{
//             type:Array
//         }
//   },
    data(){
        return{
            title:'Hello Vue.js',
            
        }
    },
//    render(){
//        return h('div',// 标签名
//        {
//            class: 'box'
//        },  // prop 或 attribute
//        [
//            this.$slots.default(),  // 包含其子节点的数组
//         //    h('h'+this.level,{},'我是子节点，hahha')
//         h(ButtonCounter) //创建组件VNode
//        ]
      
//        )
//    },
    render(){
    // if(this.items.length){
    //     return h('ul',
    //     this.items.map(item =>
    //      { 
    //         return h('li',item.name)
    //         })
    //      )
    // }else{
    //     return h('p', 'No items found.')
    // }
    return h(ButtonCounter, {
       modelValue: this.title,
       'onUpdate:modelValue': value => this.$emit('update:modelValue', this.title =  value)
  })
    },
   mounted(){
    //    console.log('$el',this.$el)
    //    console.log('$props',this.$props)
    //    console.log('$dataA',this.$data)
       
   }
  
}
</script>

<style>

</style>