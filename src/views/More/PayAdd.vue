<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header header-title="添加支出分类" button-content="确定" @click="createTag"/>
            <TagForm :selected-icon.sync="selectedIcon" :icon-name="iconName"
                     @update:input="onUpdateInput"/>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import TagForm from '@/components/TagForm.vue';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();

  @Component({
    components: {Header, IconWithBorder, TagForm}
  })
  export default class PayAdd extends Vue {
    // iconName 支出分类的图标库
    iconName: string[] = [
      'phoneBill',
      'sock',
      'jingDong',
      'game',
      'taoBao',
      'houseRent',
      'bedroom',
      'grocery-shopping',
      'utility-bill',
      'shuiguo',
      'dog3',
      'breakfast',
      'lunch',
      'sancan',
      'traffic',
      'amusement',
      'chufang',
      'travel',
      'close',
      'girlfriend'
    ];
    selectedIcon = '';
    tagText = '';


    onUpdateInput(value: string) {
      this.tagText = value;
    }

    createTag(obj: Tag) {
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


    }

</style>