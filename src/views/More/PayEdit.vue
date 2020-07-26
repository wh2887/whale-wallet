<template>
    <Layout>
        <div>
            <div class="header">
                <button class="left">
                    <Icon name="left"/>
                    <span>返回</span>
                </button>
                <span>编辑支出分类</span>
                <button class="add">添加</button>
            </div>
            <div class="icon-list">
                <div class="left">
                    <IconWithBorder name="dog3"/>
                    <span>宠物</span>
                </div>
                <Icon name="right"/>
            </div>
            <div class="icon-list">
                <div class="left">
                    <IconWithBorder name="dog3"/>
                    <span>宠物</span>
                </div>
                <Icon name="right"/>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';

  @Component({
    components: {IconWithBorder}
  })
  export default class PayEdit extends Vue {
    yyy() {
      console.log(this.$route.query.a);
    }
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

    .icon-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 16px;
        @extend %bottomShadow;

        > .left {
            display: flex;
            justify-content: center;
            align-items: center;

            > span {
                padding-left: 12px;
            }
        }
    }
</style>