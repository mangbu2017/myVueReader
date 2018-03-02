<template>
    <div class="mall-type">
        <mall-type-title :title="this.title" :linkto="this.linkto"></mall-type-title>
        <div class="mall-type-content">
            <div>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F">
                <span>圣墟</span>
            </div>
            <div>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F">
                <span>圣墟</span>
            </div>
            <div>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F">
                <span>圣墟</span>
            </div>
        </div>
    </div>
</template>
<script>
    import MallTypeTitle from './MallTypeTitle.vue';
    console.log(MallTypeTitle);
    export default {
        name: 'MallType',
        data(){
            return {
                
            }
        },
        props: [
            'linkto',
            'title'
        ],
        components: {
            MallTypeTitle
        }
    }
</script>
<style scoped lang="less">
    @import '../../less/malltype.less';
</style>
