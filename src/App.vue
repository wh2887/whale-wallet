<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<style lang="scss">
    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    #app {
        max-width: 500px;
        margin: 0 auto;
        font-family: $font-hei;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $color-nearblack;
    }

</style>
