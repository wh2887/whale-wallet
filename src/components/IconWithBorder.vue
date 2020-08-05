<template>
    <Icon class="icon-border" v-bind="$attrs"/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class IconWithBorder extends Vue {
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .icon-border {
        width: 38px;
        height: 38px;
        font-size: 1.5em;
        line-height: 1.5em;
        border: 1px solid $color-highlight;
        border-radius: 10px;
    }
</style>