<template>
    <nav>
        <router-link class="item" to="/statistics" active-class="selected">
            <Icon name="statistics"/>
            <span>报表</span>
        </router-link>

        <router-link class="item" to="/details" active-class="selected" @click.native="toggle">
            <Icon name="add"/>
            <span>记一笔</span>
        </router-link>

        <router-link class="item" to="/more" active-class="selected">
            <Icon name="more"/>
            <span>更多</span>
        </router-link>

    </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
    replyWord = true;

    toggle() {
      this.replyWord = !this.replyWord;
      this.$emit('getReply', this.replyWord);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    nav {
        @extend %outerShadow;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        .item {
            width: 33.3333%;
            padding: 5px 0;

            > :nth-child(1) {
                font-size: 2em;
            }

            > :nth-child(2) {
                display: block;
                padding: 2px 0;
                font-size: 0.6em;
            }

            &.selected {
                > :nth-child(1) {
                    color: $color-highlight;
                }
            }
        }
    }
</style>