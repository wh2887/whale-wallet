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
      this.tag = window.findTag(this.$route.params.id);
      if (this.tag) {
        this.selectedIcon = this.tag.iconName;
      }
      if (!this.tag) {
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
        window.updateTag(this.tag.id, this.selectedIcon, this.tag.tagText);
        this.$router.back();
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