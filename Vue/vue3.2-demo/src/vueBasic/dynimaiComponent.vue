<template>
    <div class="dynimaicBox">
        <button
     v-for="tab in tabs"
     v-bind:key="tab"
     v-bind:class="['tab-button', { active: currentTab === tab }]"
     v-on:click="currentTab = tab"
   >
    {{ tab }}
  </button>
   <component v-bind:is="currentTabComponent" class="tab"></component>
     <!-- <component :is="currentTabComponent" /> -->
    </div>
</template>

<script>

export default {
    data(){
        return {
            currentTab:'Home',
            tabs: ['Home','Posts','Archive']
        }
    },
    computed: {
        currentTabComponent(){
            return 'tab-' + this.currentTab.toLowerCase()
    }
    }
}
</script>

<style>

</style>