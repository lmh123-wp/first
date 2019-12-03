<template>
    <footer class="foot">
        <router-link to="/find">发现</router-link>
        <router-link to="/shelf">书架</router-link>
        <router-link to="/story">故事</router-link>
        <router-link to="/my">我</router-link>
    </footer>
</template>

<style lang="scss">
    .foot{
        width:100%;
        height: 44px;
        line-height: 44px;
        display: flex;
        border-top:1px solid gray;
        a{
            flex:1;
            text-align: center;
            text-decoration: none;
        }
        .active{
            color:red;
        }
    }
</style>

