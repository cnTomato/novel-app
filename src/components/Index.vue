<template>
    <div class="index">
        <h1>搜小说-拒绝广告</h1>
        <div class="searchArea">
            <input type="text">
            <i class="icon icon-search"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                searchData: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    html,body,#app,.index{
        width:100%;
        height:100%;
    }
</style>
