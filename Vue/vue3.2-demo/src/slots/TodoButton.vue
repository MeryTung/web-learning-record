<template>
   <div class="todoBox">
       <!-- <button class="btn">
          Submit
       </button> -->
       <slot :item="item"></slot>
       <!-- <header><slot name="header"></slot></header>
       <main>
           <li v-for="(item,i) in items" :key="i">
               <slot :item="item">
           </slot>
           </li>
           </main>
       <footer><slot name="footer"></slot></footer> -->
   </div>
</template>

<script>

export default {
        data(){
            return {
                action:"vue",
                 items:{
        username:'夜华',
        age:20
      },
      item:'白浅'
            }
        }
}
</script>

<style>

</style>