<template>
    <div>
        <svg class="icon" aria-hidden="true">
            <use :xlink:href=" '#icon-' + name "></use>
        </svg>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Icon extends Vue {
    @Prop() name: undefined;
  }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>