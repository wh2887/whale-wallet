<template>
    <div class="layout-wrapper" :class=" classPrefix && `${classPrefix}-wrapper` ">
        <div class="content" :class=" classPrefix && `${classPrefix}-content`">
            <slot/>
        </div>
        <Nav v-bind="$attrs" v-on="$listeners"/>
    </div>
</template>

<script lang="js">

  export default {
    props: ['classPrefix'],
  }
</script>
<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .layout-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: $color-background;

        > .content {
            width: 100%;
            flex-grow: 1;
            overflow: auto;
        }

    }
</style>