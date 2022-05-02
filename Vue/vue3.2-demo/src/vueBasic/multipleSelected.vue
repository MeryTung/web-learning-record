<template>
  <div>
    <select  v-model="selected" multiple>
        <option v-for="(o,i) in options" :key="i" :value="o.value">{{o.quotations}}</option>
    </select>
    <p>{{selected}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            selected:['github'],
            options:[
                {value:'www.baidu.com',quotations:'百度'},
                {value:'www.google.com.cn',quotations:'谷歌'},
                {value:'www.github.com',quotations:'github'},
                {value:'www.gitee.com',quotations:'gitee'},
                {value:'www.juejin.cn',quotations:'掘金'}

            ]
        }
    },
    // created(){
    //     this.selected.push(this.options[2].value)
    // }
}
</script>

<style>

</style>