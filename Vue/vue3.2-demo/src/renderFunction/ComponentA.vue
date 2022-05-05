<script>
import tabHome from '@/renderFunction/tabHome.vue'
import { h,resolveDynamicComponent  } from 'vue'
// import ButtonCounter from '@/renderFunction/ButtonCounter.vue'
export default {
    components:{
    //     ButtonCounter ,
         tabHome
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
            currentTab: 'Home',
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
    //v-model
//     return h(ButtonCounter, {
//        modelValue: this.title,
//        'onUpdate:modelValue': value => this.$emit('update:modelValue', this.title =  value )
//   })
//v-on
// {
//   class: ['button', { 'is-outlined': isOutlined }],
//   style: [{ color: '#34495E' }, { backgroundColor: buttonColor }],
//   id: 'submit',
//   innerHTML: '',
//   onClick: submitForm,
//   key: 'submit-button'
// }
//      return h('button',
//      {onClick: $event => console.log('clicked', $event.target),innerHTML:'Add'}
//   )
  //事件修饰符
    // return h('input',{
    //     onClickCapture: this.doThisInCapturingMode,
    //     onKeyupOnce: this.doThisOnce,
    //     onMouseoverOnceCapture: this.doThisOnceInCapturingMode
    //     })
   //// `<component :is="name"></component>`
  const Component = resolveDynamicComponent(this.name)
  return h(Component)

    },
    methods:{
        doThisInCapturingMode(){
            console.log('doThisInCapturingMode')
        },
        doThisOnce(){
            console.log('doThisOnce')
        },
        doThisOnceInCapturingMode(){
            console.log('doThisOnceInCapturingMode')
        }
    },
    computed:{
        name(){
            return 'tab-' + this.currentTab.toLowerCase()
        }
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