<template>
    <Layout>
        <Header header-title="编辑支出分类" button-content="添加" @click="jumpToAdd('-')"/>
        <router-link class="icon-list" v-for="tag in tags" :key="tag.id"
                     :to="`/more/payedit/${tag.id}`" v-show="tag.type === '-'">
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


  @Component({
    components: {Header, IconWithBorder},
  })
  export default class PayEdit extends Vue {
    get tags() {
      return this.$store.state.tagList;
    }

    beforeCreate() {
      this.$store.commit('initTags');
    }

    jumpToAdd(type: string) {
      this.$router.push({path: '/more/payadd', query: {type: type}});
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