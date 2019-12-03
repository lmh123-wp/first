<template>
    <div class="wrap">
        <header>
            <span class="checkall" v-show="isEdit" @click="checkAllFun">{{checkAll?'全不选':'全选'}}</span>
            书架
            <span class="edit" @click="isEdit=!isEdit">{{isEdit?'取消':'编辑'}}</span>
        </header>
        <div class="con">
            <div class="search" @click="$router.push('/search')">搜索</div>
            <div class="book-list">
                <BookItem v-for="item in bookList" 
                    :isEdit="isEdit"
                    :item="item"
                    @changeCheck="changeCheck"
                ></BookItem>
            </div>
        </div>
        <footer class="foot" v-show="isEdit">
            <a>私密阅读</a>
            <a>开启离线</a>
            <a>分组到</a>
            <a>移除书架</a>
        </footer>
        <Footer v-show="!isEdit"></Footer>
    </div>
</template>
<script>
import Footer from '@/components/footer'
import BookItem from '@/components/book-item'
export default {
    data(){
        return {
            isEdit:false,
            bookList:[],
            checkAll:false
        }
    },
    created(){
        this.$http.get('/api/list').then(res => {
            if(res.data.code === 1){
                this.bookList = res.data.data;
            }
        })
    },
    components:{
        Footer,
        BookItem
    },
    methods:{
        changeCheck(id){
            let index = this.bookList.findIndex(item => item.id === id);
            console.log(index)
            this.bookList[index].check = !this.bookList[index].check;
            this.checkAll = this.bookList.every(item => item.check);
        },
        checkAllFun(){
            this.checkAll = !this.checkAll;
            this.bookList.forEach(item => {
                item.check = this.checkAll
            })
        }
    }
}
</script>

<style lang="scss">
    .book-list{
        width:100%;
        display: flex;
        flex-wrap: wrap;
    }
    .edit{
        width:44px;
        height: 44px;
        text-align: center;
        position: absolute;
        top:0;
        right:0; 
    }
    .checkall{
        width:44px;
        height: 44px;
        text-align: center;
        position: absolute;
        top:0;
        left:0; 
    }
</style>

