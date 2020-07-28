<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header>
                <span>修改支出分类</span>
                <button class="add" @click="updateTag">确定</button>
            </Header>
            <div class="input">
                <IconWithBorder :name="selectedIcon"/>
                <label>
                    <input type="text" maxlength="3" placeholder="自定义输入名字，限 2 个字" v-model="tag.tagText">
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
  import {Component, Watch} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();

  @Component({
    components: {Header, IconWithBorder}
  })
  export default class TagEdit extends Vue {
    tag?: Tag;
    iconName: string[] = ['dog3', 'breakfast', 'lunch', 'sancan', 'traffic', 'amusement', 'chufang', 'travel', 'close', 'girlfriend'];
    selectedIcon = '';


    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(item => item.id === id)[0];
      if (tag) {
        this.tag = tag;
        this.selectedIcon = this.tag.iconName;
      } else {
        this.$router.replace('/404');
      }
    }

    select(name: string) {
      this.selectedIcon = name;
    }

    updateTag() {
      if (this.tag) {
        try {
          tagListModel.update(this.tag.id, this.selectedIcon, this.tag.tagText);
          this.$router.go(-1);
        } catch (error) {
          if (error.message === 'icon duplicated') {
            window.alert('标签图标重复！请重新输入标签名！');
          } else if (error.message === 'text duplicated') {
            window.alert('标签名重复！请重新输入标签名！');
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