<template>
    <div class="mall-long">
        <MallTypeTitle :title="this.title" :tolink="this.tolink"></MallTypeTitle>
        <mall-long-content></mall-long-content>
        <mall-long-content></mall-long-content>
        <mall-long-content></mall-long-content>
    </div>
</template>
<script>
    import MallTypeTitle from './MallTypeTitle';
    import MallLongContent from './MallLongContent';
    export default {
        components: {
            MallTypeTitle,
            MallLongContent
        },
        props: [
            'title',
            'tolink'
        ]
    }
</script>
