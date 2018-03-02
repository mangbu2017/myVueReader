<template>
  <div class="hello">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="书架">
        <mt-header fixed :title="selected"></mt-header>
        <book-shelf class="tab-container"></book-shelf>
      </mt-tab-container-item>
      <mt-tab-container-item id="书城">
        <mt-header fixed :title="selected"></mt-header>
        <book-mall class="tab-container"></book-mall>
      </mt-tab-container-item>
      <mt-tab-container-item id="排行榜">
        <mt-header fixed :title="selected"></mt-header>
        <ranking-list class="tab-container"></ranking-list>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed> 
      <mt-tab-item id="书架" footer>
          <img slot="icon" src="../assets/shujia.png" alt="">
        书架
      </mt-tab-item>
      <mt-tab-item id="书城">
        <img slot="icon" src="../assets/shucheng.png" alt="">
        书城
      </mt-tab-item>
      <mt-tab-item id="排行榜">
        <img slot="icon" src="../assets/paihangbang.png" alt="">
        排行榜
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import BookMall from './mall/Bookmall';
import RankingList from './rank/RankingList';
import BookShelf from './shelf/BookShelf';

export default {
  name: 'HomePage',
  data () {
    return {
      selected: '书城',
    }
  },
  components: {
    BookMall,
    RankingList,
    BookShelf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-container {
	box-sizing: border-box;
	padding-top: 41px;
	padding-bottom: 80px;
	width: 100vw;
  min-height: 100vh;
}
</style>
