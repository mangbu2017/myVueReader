<template>
    <div class="book-mall">
        <div class="mall-nav">
            <router-link to=""  class="mall-nav-link">
                <img src="../../assets/good.png">
                <span>推荐</span>
            </router-link>
            <router-link to="" class="mall-nav-link">
                <img src="../../assets/star.png">
                <span>推荐</span>
            </router-link>
            <router-link to="" class="mall-nav-link">
                <img src="../../assets/fire.png">
                <span>推荐</span>
            </router-link>
            <router-link to="" class="mall-nav-link">
                <img src="../../assets/four.png">
                <span>推荐</span>
            </router-link>
        </div>
        <mall-type title="男生爱看" linkto=""></mall-type>
        <mall-type title="女生爱看" linkto=""></mall-type>
        <mall-long title="火热新书" linkto=""></mall-long>
        <mall-long title="热门连载" linkto=""></mall-long>
        <mall-long title="重磅推荐" linkto=""></mall-long>
    </div>  
</template>
<script>
    import MallType from './MallType';
    import MallLong from './MallLong';
    console.log(MallType);
    export default {
        data(){
            return {

            }
        },
        components: {
            MallType,
            MallLong
        }
    }
</script>
<style scoped lang="less">
    @import '../../less/bookmall.less';
</style>