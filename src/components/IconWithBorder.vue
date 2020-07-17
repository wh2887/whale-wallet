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

        font-size: 1.5em;
        line-height: 1.5em;
        margin-left: 4px;
        padding: 0 6px;
        border: 1px solid $color-highlight;
        border-radius: 10px;
    }
</style>