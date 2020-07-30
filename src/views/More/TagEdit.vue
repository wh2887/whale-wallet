<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header header-title="修改支出分类" button-content="确定" @click="updateTag"/>
            <TagForm :delete-toggle="true"
                     :selected-icon.sync="selectedIcon"
                     :icon-name="iconName"
                     :tag="tag"
                     @update:input="onUpdateInput"
            />
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import tagListModel from '@/models/tagListModel';
  import TagForm from '@/components/TagForm.vue';


  @Component({
    components: {TagForm, Header}
  })
  export default class TagEdit extends Vue {
    tags = window.tagList;
    tag?: Tag;
    iconName: string[] = ['dog3', 'breakfast', 'lunch', 'sancan', 'traffic', 'amusement', 'chufang', 'travel', 'close', 'girlfriend'];
    selectedIcon = '';


    created() {
      const id = this.$route.params.id;
      // tagListModel.fetch();
      const tag = this.tags.filter(item => item.id === id)[0];
      if (tag) {
        this.tag = tag;
        this.selectedIcon = this.tag.iconName;
      } else {
        this.$router.replace('/404');
      }
    }

    onUpdateInput(value: string) {
      if (this.tag) {
        this.tag.tagText = value;
      }
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

    .payadd-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

</style>