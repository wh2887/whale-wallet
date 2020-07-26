<template>
    <Layout>
        <Header>
            <span>编辑支出分类</span>
            <button class="add" @click="yyy">添加</button>
        </Header>

        <div class="icon-list">
            <div class="left">
                <IconWithBorder name="dog3"/>
                <span>宠物</span>
            </div>
            <button @click="yyy">
                <Icon name="right"/>
            </button>
        </div>
        <div class="icon-list">
            <div class="left">
                <IconWithBorder name="dog3"/>
                <span>宠物</span>
            </div>
            <button @click="yyy">
                <Icon name="right"/>
            </button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import Header from '@/components/Header.vue';

  @Component({
    components: {Header, IconWithBorder}
  })
  export default class PayEdit extends Vue {
    yyy() {
      this.$router.push({path: '/more/payadd', query: {type: '-'}});
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    .icon-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 16px;
        @extend %bottomShadow;
        > button{
            border: none;
            background: inherit;
        }

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