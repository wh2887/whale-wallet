<template>
    <Layout>
        <Header>
            <span>编辑支出分类</span>
            <button class="add" @click="jumpToAdd('-',)">添加</button>
        </Header>

        <div class="icon-list" v-for="tag in tagsList" :key="tag.id"
             @click="jumpWithTag(tag.iconName,tag.tagText)">
            <div class="left">
                <IconWithBorder :name="tag.iconName"/>
                <span>{{tag.tagText}}</span>
            </div>
            <button>
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
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();
  @Component({
    components: {Header, IconWithBorder}
  })
  export default class PayEdit extends Vue {
    tagsList = tagListModel.data;

    jumpToAdd(type: string) {
      this.$router.push({path: '/more/payadd', query: {type: type}});
    }

    jumpWithTag(iconName: string, tagText: string) {
      this.$router.push({path: '/more/payadd', query: {iconName: iconName, tagText: tagText}});
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

        > button {
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