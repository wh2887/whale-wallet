<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header>
                <span>添加支出分类</span>
                <button class="add" @click="createTag">确定</button>
            </Header>
            <div class="input">
                <IconWithBorder :name="selectedIcon"/>
                <label>
                    <input type="text" placeholder="自定义输入名字，限 2 个字" v-model="tagText">
                </label>
            </div>
            <div class="list-wrapper">
                <div class="icon-list">
                    <IconWithBorder :name="name" v-for="(name,index) in iconName" :key="index"
                                    @click.native="select(name)"/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                </div>
            </div>

        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();

  @Component({
    components: {Header, IconWithBorder}
  })
  export default class PayAdd extends Vue {
    iconName: string[] = ['dog3', 'breakfast', 'lunch', 'sancan', 'traffic', 'amusement', 'chufang', 'travel', 'close', 'girlfriend'];
    selectedIcon = '';
    tagText = '';

    mounted() {
      const x = this.$route.query.tagText as string;
      const y = this.$route.query.iconName as string;
      if (x && y) {
        this.tagText = x;
        this.selectedIcon = y;
      } else {
        this.tagText = '';
        this.selectedIcon = '';
      }
    }

    select(value: string) {
      this.selectedIcon = value;
    }

    createTag(obj: Tag) {
      // 目前ID不能做到数字 自增1   因为每次刷新页面都是从1开始。  可以解决就是写一个ID生成器。  先string占位吧。
      obj = {id: this.selectedIcon, iconName: this.selectedIcon, tagText: this.tagText};
      if (obj) {
        try {
          tagListModel.create(obj);
          this.$router.go(-1);
        } catch (error) {
          if (error.message === 'icon duplicated') {
            window.alert('标签图标重复，请重新选择图标！');
          } else if (error.message === 'text duplicated') {
            window.alert('标签名称重复，请重新输入名称！');
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    .payadd-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;

        > .input {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4px 16px;
            @extend %bottomShadow;

            > label {
                > input {
                    border: none;
                    background: inherit;
                    font-size: 1.5em;

                    &::placeholder {
                        font-size: 0.7em;
                        color: $color-nearblack;
                    }
                }
            }
        }

        .list-wrapper {
            flex-grow: 1;
            overflow: auto;

            > .icon-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin: 20px 11px;

                > * {
                    margin: 10px;
                }

                > :nth-last-child(1), :nth-last-child(2), :nth-last-child(3), :nth-last-child(4), :nth-last-child(5), :nth-last-child(6), {
                    border: none;
                }
            }
        }
    }

</style>