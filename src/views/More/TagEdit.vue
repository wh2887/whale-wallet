<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header header-title="修改支出分类" button-content="确定" @click="updateTag"/>
            <TagForm :delete-toggle="true"
                     :selected-icon.sync="selectedIcon"
                     :icon-name="iconName"
                     :tag="currentTag"
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
  import payIconList from '@/constants/payIconList';


  @Component({
    components: {TagForm, Header},
  })
  export default class TagEdit extends Vue {
    iconName = payIconList;
    selectedIcon = '';

    get currentTag() {
      return this.$store.state.currentTag;
    }

    created() {
      const id = this.$route.params.id;
      this.$store.commit('initTags');
      this.$store.commit('setCurrentTag', id);
      if (this.currentTag) {
        this.selectedIcon = this.currentTag.iconName;
      }
      if (!this.currentTag) {
        this.$router.replace('/404');
      }
    }

    onUpdateInput(value: string) {
      if (this.currentTag) {
        this.currentTag.tagText = value;
      }
    }

    updateTag() {
      if (this.currentTag) {
        this.$store.commit('updateTag', {
          id: this.currentTag.id,
          iconName: this.selectedIcon,
          tagText: this.currentTag.tagText
        });
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