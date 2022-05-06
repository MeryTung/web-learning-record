<template>
  <div class="countBox">
      <ul>
          <li v-for="item in listData" :key="item.id">
              <h3>{{item.title}}</h3>
              <button @click='addProductToCart(item)'>添加购物车</button>
          </li>
      </ul>
      <hr/>
      <h1>购物车</h1>
      <ul>
          <li v-for="item in items" :key="item.id">
              {{item}}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
     data(){
         return {
             listData:[
                {id:1,title:'西瓜',quantity:1},
                {id:2,title:'香蕉',quantity:1},
             ]
         }
     },
      computed:{
        ...mapGetters(['items'])
  },
  methods:{
      ...mapMutations({
          pushProductToCart:'PUSH_PRODUCT_TO_CART'
      }),
      addProductToCart(item){
          this.$store.dispatch('addProductToCart',item)
      },
    //   ...mapActions(['addProductToCart'])
  }
}
</script>

<style>

</style>