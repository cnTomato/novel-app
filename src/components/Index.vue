<template>
    <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
    </mt-search>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                searchData: ''
            }
        }
    }
</script>
<style scoped lang="scss">
    .index {
        display: flex;
        padding: 0 .15rem;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        font-size: .24rem;
        text-align: center;
    }

    .searchArea {
        position: relative;
        input {
            display: block;
            background-color: #fff;
            border-radius: .05rem;
        }
        .icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>
