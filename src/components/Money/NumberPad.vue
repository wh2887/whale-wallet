<template>
    <div class="number-wrapper">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button> +</button>
        <button>0</button>
        <button>.</button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .number-wrapper {
        @extend %clearFix;
        width: 87vw;
        height: 322px;
        margin-top: 8px;
        border: 1px solid $color-d;
        border-radius: 10px;
        font-family: Consolas monospace;
        > button {
            width: 68px;
            height: 68px;
            border: none;
            background: #E4E4E4;
            border-radius: 10px;
            margin: 6px;
            font-size: 1.5em;
            float: left;

            &:active {
                color: white;
                background: $color-highlight;
            }
            &.ok {
                height:  68*2 + 10px;
                float: right;
                margin-right: 10px;

            }
        }

    }
</style>