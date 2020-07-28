<template>
    <Layout>
        <Header header-title="编辑支出分类" button-content="添加" @click="jumpToAdd('-',)"/>
        <router-link class="icon-list" v-for="tag in tags" :key="tag.id"
                     :to="`/more/payedit/${tag.id}`">
            <div class="left">
                <IconWithBorder :name="tag.iconName"/>
                <span>{{tag.tagText}}</span>
            </div>
            <button>
                <Icon name="right"/>
            </button>
        </router-link>
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
    tags = tagListModel.data;

    jumpToAdd(type: string) {
      this.$router.push({path: '/more/payadd', query: {type: type}});
    }

    // jumpToEdit(iconName: string, tagText: string) {
    //   this.$router.push({path: '/more/payedit', query: {iconName: iconName, tagText: tagText}});
    // }
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