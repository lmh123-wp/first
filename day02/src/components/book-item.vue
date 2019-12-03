<template>
    <dl class="book-item">
        <dt>
            <img :src="item.url" alt="">
            <div :class="['icon',{'active':item.check}]" v-show="isEdit" @click="checkItem"></div>
        </dt>
        <dd>
            {{item.name}}
        </dd>
    </dl>
</template>

<script>
export default {
    props:['isEdit','item'],
    methods:{
        checkItem(){
            // this.item.id 
            this.$emit('changeCheck',this.item.id);
        }
    }
}
</script>

<style lang="scss">
    .book-item{
        width:33.33%;
        padding:10px;
        dt{
            width:100%;
            position: relative;
            border:1px solid gray;
            img{
                width:100%;
            }
            .icon{
                width:20px;
                height: 20px;
                border:1px solid gray;
                border-radius: 50%;
                position:absolute;
                right:10px;
                bottom:10px;
            }
            .active{
                background: red;
            }
        }
    }
</style>

