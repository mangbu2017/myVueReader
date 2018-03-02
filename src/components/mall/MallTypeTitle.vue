<template>
    <div class="mall-type-title">
        <mt-cell :title="this.title" is-link class="mall-type-title-cell" :to="this.linkto">
            <span>更多</span>
        </mt-cell>
    </div>
</template>
<script>
    export default {
        name: 'MallTypeTitle',
        data(){
            return {

            }
        },
        props: ['title', 'linkto']
    }
</script>
<style scoped lang="less">
    .mall-type-title {
        background-color: #31a2fb;
        .mall-type-title-cell {
            margin-left: 5px;
            /* 太远了 */
            span {
                margin-right: -6px;
            }
        }
    }
</style>

