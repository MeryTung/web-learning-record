<template>
<div class="mainbox">
  <!-- <IndexTest />
  <DataProperty /> -->
  <!-- <TreeShaking /> -->
  <!-- <ComputedWatch /> -->
  <!-- <dynamicCss /> -->
  <!-- <dynamicStyle /> -->
  <!-- <conditionTest /> -->
  <!-- <listRender /> -->
  <!-- <eventHandle /> -->
  <!-- <formBasic /> -->
  <!-- <multipleSelected /> -->
  <!-- <valueBindings /> -->
  <!----组件的复用---->
  <!-- <useingComponent />
  <useingComponent />
  <useingComponent /> -->
  <!-- <blogPost  :title="songName"  :msg="blogTitle"/> -->
  <!-- <div :style="{ fontSize: postFontSize + 'em' }">
  <blogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize +=$event"/>
  </div> -->
  <!-- <blogPost  :title="songName"  @changeTitle="handlerTitle"/> -->
  <!-----组件上使用v-model------->
  <!-- <componentModel  :model-value="songName"  @update:model-value="songName=$event"/>  -->
  <!-- <slotDistribution>
    张靓颖上海开唱深V大秀性感，张杰空降现场飙唱《燕归巢》，两位的高音可以说让人听了非常的满足了~
  </slotDistribution> -->
  <!-- <table>
    <blogPostRow/>
    </table> -->
   <!-- <div class="dynimaicBox">
        <button
     v-for="tab in tabs"
     v-bind:key="tab"
     v-bind:class="['tab-button', { active: currentTab === tab }]"
     v-on:click="currentTab = tab"
   >
    {{ tab }}
  </button> -->
  <!----动态组件不能放到儿子组件内调用----->
   <!-- <component v-bind:is="currentTabComponent" class="tab"></component> -->
     <!-- <component :is="currentTabComponent" /> -->
    <!-- </div> -->
    <!-----depth components-------->
    <!-----props传静态值---->
        <!-- <props-component title="My journey with Vue"></props-component> -->
        <!---props传动态值------>
        <!-- <props-component :title="songName" :likes="42" :list="posts" :test="person"></props-component> -->
        <!-- <props-component prop-title="hello!"></props-component> -->
        <!-- <date-picker data-status="actived" @change="showChange"></date-picker> -->
        <!-- <my-component @my-event="showChange" :title="songName"></my-component> -->
          <!-- <my-component v-model:description.capitalize="myText"></my-component>
           {{ myText }} -->
           <!-- <todo-button v-slot:default="{item}"> -->
            <!-- <font-awesome-icon :icon="['fas','address-book']" /> -->
            <!-- <font-awesome-icon :icon="['fas', 'phone']" /> -->
            <!-- <font-awesome-icon :icon="['fas','arrow-up-from-ground-water']" />
            <font-awesome-icon :icon="['far', 'address-book']" />
            <font-awesome-icon :icon="['fab', 'apple']" /> -->

               <!-- <span class="green" >{{ item }}</span> -->
             <!-- <template v-slot:header>
               <h1>Here might be a page title</h1>
               </template>
             <template v-slot:default="slotProps">
               <span>{{slotProps.item}}</span>
            </template>
             <template v-slot:footer>
               <p>Here's some contact info</p>
             </template> -->
           <!-- </todo-button> -->
           <!----具名插槽缩写---->
           <todo-button>
              <template #header>
               <h1>Here might be a page title</h1>
               </template>
             <template #default="slotProps">
               <span>{{slotProps.item}}</span>
            </template>
             <template #footer>
               <p>Here's some contact info</p>
             </template>
           </todo-button>
</div>
</template>

<script>
// import IndexTest from '@/webComponents/IndexTest.vue';
// import DataProperty from '@/vueBasic/DataProperty.vue';
// import TreeShaking from  '@/vueBasic/TreeShaking.vue'
// import ComputedWatch from '@/vueBasic/ComputedWatch.vue'
// import dynamicCss from '@/vueBasic/dynamicCss.vue'
// import dynamicStyle from '@/vueBasic/dynamicStyle.vue'
// import conditionTest from '@/vueBasic/conditionTest.vue'
// import listRender from '@/vueBasic/listRender.vue'
// import eventHandle from '@/vueBasic/eventHandle.vue'
// import formBasic from '@/vueBasic/formBasic.vue'
// import multipleSelected from '@/vueBasic/multipleSelected.vue'
// import valueBindings from '@/vueBasic/valueBindings.vue'
// import useingComponent from '@/vueBasic/useingComponent.vue'
// import blogPost from '@/vueBasic/blogPost.vue'
// import componentModel from '@/vueBasic/componentModel.vue'
// import slotDistribution from '@/vueBasic/slotDistribution.vue'
// import dynimaiComponent from '@/vueBasic/dynimaiComponent.vue'
// import TabArchive from '@/vueBasic/tabArchive.vue'
// import TabHome from '@/vueBasic/tabHome.vue'
// import TabPosts from '@/vueBasic/tabPosts.vue'
// import blogPostRow from '@/vueBasic/blogPostRow.vue'
// import PropsComponent from './ComponentsInDepth/PropsComponent.vue'
// import PropsComponent from '@/ComponentsInDepth/PropsComponent.vue'
// import {Person}  from '~/utils/index.js'
// import DatePicker from '@/ComponentsInDepth/DatePicker.vue'
// import MyComponent from './vueBasic/myComponent.vue'
// import myComponent from '@/ComponentsInDepth/myComponent.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TodoButton from '@/slots/TodoButton.vue'


export default {
  name: 'App',
  components: {
    // IndexTest,
    // DataProperty,
    // TreeShaking
    // ComputedWatch,
    // dynamicCss 
      // dynamicStyle,
      // conditionTest,
      // listRender,
      // eventHandle,
      // formBasic
      // multipleSelected,
      // valueBindings,
      // useingComponent,
      // blogPost,
      // componentModel,
      // slotDistribution,
    //    dynimaiComponent,
    //    TabArchive,
    //     TabHome,
    //     TabPosts,
    //     blogPostRow
    // PropsComponent,
    // PropsComponent,
    // DatePicker,
      // myComponent,
      // FontAwesomeIcon,
      TodoButton
  },
  data(){
    return {
 
     songName:'说走就走',
      blogTitle:'什么鬼阿',
       posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize:1, 
      currentTab:'Home',
      tabs: ['Home','Posts','Archive'],
      myText:'hello',
      // item:'父组件内容想在子组件自定义'
     
    }
  },
  methods: {
    handlerTitle(val){
      this.songName = val
    },
    showChange(val) {
      this.songName = val
     // console.log('123')
      //console.log(event.target.value) // 将打印所选选项的值
    }
  },
   computed: {
        currentTabComponent(){
            return 'tab-' + this.currentTab.toLowerCase()
    },
    // person(){
    //   var t = new Person('哈哈哈，夜华','20')
    //   return t
    // }
    }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style: none;
}
</style>
