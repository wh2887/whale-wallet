<template>
    <div class="moneyBG">
        <Type/>
        <Output :update-icon="tagsName"/>
        <Tags :tag-data-source="tags" v-on:update:icon="getIconName"/>
        <Notes/>
        <NumberPad/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Money/Type.vue';
  import Output from '@/components/Money/Output.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  @Component({
    components: {NumberPad, Notes, Tags, Output, Type}
  })
  export default class Money extends Vue {
    tagsName = '';
    tags: object[] = [

      {
        iconName: 'dog3',
        tagText: '宠物'
      },
      {
        iconName: 'breakfast',
        tagText: '早餐'
      },
      // {
      //   iconName: 'lunch',
      //   tagText: '午餐'
      // },
      // {
      //   iconName: 'dinner',
      //   tagText: '晚餐'
      // },
      {
        iconName: 'add1',
        tagText: '添加'
      },
      {
        iconName: 'bedroom',
        tagText: '卧室'
      },
      {
        iconName: 'traffic',
        tagText: '交通'
      },
      {
        iconName: 'grocery-shopping',
        tagText: '买菜'
      },
      {
        iconName: 'shuiguo',
        tagText: '水果'
      },
      {
        iconName: 'travel',
        tagText: '旅行'
      },
      // {
      //   iconName: 'close',
      //   tagText: '服饰'
      // },
    ];

    getIconName(data: string) {
      this.tagsName = data;
    }
  }
</script>
<style lang="scss">
    .moneyBG {
        display: flex;
        flex-direction: column;
    }
</style>
<style lang="scss" scoped>

</style>