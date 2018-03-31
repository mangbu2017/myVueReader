// 因为后台不是自己的 所以api用的是一位大牛对追书神器做的
// 反向代理
import Vue from 'vue';

export default {
    staticUrl: (cover) => {
        return 'http://statics.zhuishushenqi.com' + cover;
    },
    // 获取带书籍数量的父分类
    getCategories() {
        let url = 'http://novel.juhe.im/categories';
        console.log('访问：' + url);
        return Vue.http.get(url);
    },
    // 获取带子分类的分类
    getSubCategories(){
        let url = 'http://novel.juhe.im/sub-categories';
        console.log('访问：' + url);
        return Vue.http.get(url);
    },
    // 获取分类详情
    getCategoryInfo(gender, type, major, minor = '', start = 0, limit = 20) {
        let url = 'http://novel.juhe.im/category-info?gender=' + gender + '&type=' + type + '&major=' + major + '&minor=' + minor + '&start=' + start + '&limit=' + limit;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取书籍详情
    getBookInfo(bookId) {
        let url = 'http://novel.juhe.im/book-info/' + bookId;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取书籍相关推荐
    getBookRecommend(bookId) {
        let url = 'http://novel.juhe.im/recommend/' + bookId;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取作者名下的图书
    getAuthorBooks(author) {
        let url = 'http://novel.juhe.im/author-books?author=' + author;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取小说源
    getBookSources(bookId) {
        let url = 'http://novel.juhe.im/book-sources?view=summary&book=' + bookId;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 根据小说源获取小说章节
    getBookChapters(sourceId) {
        let url = 'http://novel.juhe.im/book-chapters/' + sourceId;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取小说章节的具体内容
    getBookChapterContent(link) {
        let url = 'http://novel.juhe.im/chapters/' + encodeURIComponent(link);
        console.log('访问：' + url);
        // 编码的函数使用不对
        return Vue.http.get(url)
        // return Vue.http.get('http://novel.juhe.im/chapters/http%3A%2F%2Fvip.zhuishushenqi.com%2Fchapter%2F56f8da09176d03ac1983f6d7%3Fcv%3D1486473051386');
    },
    // 根据关键字搜索小说 获取列表
    getSearch(keyword) {
        let url = 'http://novel.juhe.im/search?keyword=' + keyword;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 获取所有的排行榜类型
    getRankCategory() {
        let url = 'http://novel.juhe.im/rank-category';
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 根据id获取周月总榜
    getRank(id) {
        let url = 'http://novel.juhe.im/rank/' + id;
        console.log('访问：' + url);
        return Vue.http.get(url)
    },
    // 书评
    getReviews(bookId, sort, start, limit) {
        let url = 'http://novel.juhe.im/book/reviews?' + 'book=' + bookId + '&sort=' + sort + '&start=' + start + '&limit=' + limit;
        console.log('访问：' + url);
        return Vue.http.get(url);
    }
}