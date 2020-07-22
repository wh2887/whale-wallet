<template>
    <div class="type-wrapper">
        <div :class=" value === '+' && 'selected' " @click="selectType('+')">收入</div>
        <div :class=" value === '-' && 'selected'" @click="selectType('-')">支出</div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Type extends Vue {
    @Prop() readonly value!: string;

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown!');
      }
      this.$emit('update:value', type);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .type-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        line-height: 2.5em;
        margin-top: 9px;

        > div {
            padding: 0 35px 0 35px;
            border: 1px solid $color-highlight;
            //收入 | 支出 不换行
            white-space: nowrap;
        }

        > :nth-child(1) {
            border-radius: 10px 0 0 10px;
        }

        > :nth-child(2) {
            border-radius: 0 10px 10px 0;
        }

        & .selected {
            background: darken($color-highlight, 8%);
        }

    }
</style>