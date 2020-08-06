<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header header-title="添加支出分类" button-content="确定" @click="createTag"/>
            <TagForm :delete-toggle="false"
                     :selected-icon.sync="selectedIcon"
                     :icon-name="iconName"
                     @update:input="onUpdateInput"

            />
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import TagForm from '@/components/TagForm.vue';


  @Component({
    components: {Header, IconWithBorder, TagForm}
  })
  export default class IncomeAdd extends Vue {
    // iconName 支出分类的图标库
    iconName: string[] = [
      'jianzhi',
      'hongbao',
      'jijing',
      'gongzi',
      'Gupiao',
    ];
    selectedIcon = '';
    tagText = '';


    onUpdateInput(value: string) {
      this.tagText = value;
    }

    createTag() {
      const id = this.selectedIcon;
      const iconName = this.selectedIcon;
      const tagText = this.tagText;
      const obj = {id, iconName, tagText};
      if (obj) {
        this.$store.commit('createTag', obj);
        this.$router.back();
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