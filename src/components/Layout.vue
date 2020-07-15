<template>
    <div class="layout-wrapper" :class=" classPrefix && `${classPrefix}-wrapper` ">
        <div class="content" :class=" classPrefix && `${classPrefix}-content`">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {
    @Prop() classPrefix: string | undefined;
  }
</script>
<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: $color-background;

        > .content {
            flex-grow: 1;
            overflow: auto;
        }

    }
</style>