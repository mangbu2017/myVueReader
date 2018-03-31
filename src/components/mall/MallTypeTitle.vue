<template>
    <div class="mall-type-title">
        <!-- 这里需要注意 params 是动态路由 query是查询字符串 -->
        <mt-cell :title="this.title" is-link class="mall-type-title-cell" :to="{name: 'smallrankinglist', params: {category: 'week'}, query: {type: this.major}}">
            <span>更多</span>
        </mt-cell>
    </div>
</template>
<script>
    export default {
        props: ['title', 'linkto', 'major'],
        methods: {
            // onLinkToSmall() {
            //     this.$store.commit('SET_MAJOR', this.major);
            // }
        }
    }
</script>
<style scoped lang="less">
    .mall-type-title {
        background-color: #31a2fb;
        .mall-type-title-cell {
            margin-left: 5px;
            /* 太远了 */
            span {
                margin-top: 2px;
                margin-right: -6px;
            }
        }
    }
</style>

