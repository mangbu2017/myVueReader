<template>
    <div class="mall-type">
        <!-- gender:key,major:cat.name -->
        <mall-type-title :title="title" :major="this.content"></mall-type-title>
        <!-- 大哥 一定记住了 异步的我们用v-if渲染 -->
        <div class="mall-type-content" v-if="books">
            <div v-for="(item, index) in books" :key="index">
                <img :src="staticUrl + item.cover">
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import MallTypeTitle from './MallTypeTitle.vue';
    import ajax from '../../js/api.js';
    
    export default {
        name: 'MallType',
        props: ['title', 'content'],
        data(){
            return {
                staticUrl: 'http://statics.zhuishushenqi.com',
                linkto: '',
                books: null
            }
        },
        components: {
            MallTypeTitle
        },
        created(){
            console.log(111);
            // gender, type, major, minor = '', start = 0, limit = 20
            ajax.getCategoryInfo('male', 'hot', this.content, '', 0, 3).then((res) => {
                console.log(res);
                this.books = res.data.data.books;
                console.log(this.books);
            })
        } 
    }
</script>
<style scoped lang="less">
    .mall-type{       
        .mall-type-title {
            background-color: #31a2fb;
            .mall-type-title-cell {
                margin-left: 1vw;
                /* 太远了 */
                span {
                    margin-right: -1.5vw;
                }
            }
        }
        .mall-type-content {
            height: 22vh; 
            width: 100%;
            padding-top: 3vh;
            margin-bottom: 1.5vh;
            background-color: #fff;
            display: flex;
            justify-content: space-around;
            img { 
                height: 16.5vh;
                width: 22vw;
            }
            span{
                display: block;
                font-size: .5rem;
                // margin-top: -.5vh;
            }
        }
    }
</style>
