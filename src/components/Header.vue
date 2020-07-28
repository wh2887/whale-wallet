<template>
    <div class="header">
        <button class="left" @click="$router.go(-1)">
            <Icon name="left"/>
            <span>返回</span>
        </button>
        <span>{{headerTitle}}</span>
        <button class="add" @click="$emit('click',$event)">{{buttonContent}}</button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
    @Prop({required: true}) headerTitle!: string;
    @Prop({required: true}) buttonContent!: string;

  }
</script>

<style lang="scss" scoped>

    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 12px;
        box-shadow: cornflowerblue;
        @extend %bottomShadow ;

        > span {
            font-size: 1.5em;
        }

        > .left {
            border: none;
            background: inherit;

            &:nth-child(1) {
                font-size: 1.2em;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            > span {
                color: $color-highlight;
                font-size: 16px;
                line-height: 1em;
            }
        }

        > .add {
            border: none;
            background: inherit;
            font-size: 1em;
            color: $color-highlight;
        }
    }

</style>