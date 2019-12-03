<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing: border-box;
    }

    html,body,#app,.wrap{
        width:100%;
        height: 100%;
        overflow: hidden;
    }

    .wrap{
        display: flex;
        flex-direction: column;
        header{
            width:100%;
            height: 44px;
            line-height: 44px;
            border-bottom:1px solid gray;
            text-align: center;
            position: relative;
        }
        .con{
            width:100%;
            flex:1;
            overflow: auto;
        }
    }
</style>
