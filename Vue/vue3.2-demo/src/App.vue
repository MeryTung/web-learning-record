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
  <slotDistribution>
    张靓颖上海开唱深V大秀性感，张杰空降现场飙唱《燕归巢》，两位的高音可以说让人听了非常的满足了~
  </slotDistribution>
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
import slotDistribution from '@/vueBasic/slotDistribution.vue'



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
      slotDistribution

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
      postFontSize:1
    }
  },
  methods: {
    handlerTitle(val){
      this.songName = val
    }
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
</style>
