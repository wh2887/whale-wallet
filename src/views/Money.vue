<template>
    <div class="moneyBG">
        <Type :value.sync="record.type"/>
        <Output :update-icon="record.tagsName" :update-output="record.amount"/>
        <Tags :tag-data-source="tags" @update:icon="onUpdateIcon" @update:page="onUpdatePage"/>
        <Notes @update:value="onUpdateNote"/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Type from '@/components/Money/Type.vue';
  import Output from '@/components/Money/Output.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  type Record = {
    type: string;
    output: string;
    tagsPage: string;
    tagsName: string;
    note: string;
    amount: number;
  }

  @Component({
    components: {NumberPad, Notes, Tags, Output, Type}
  })
  export default class Money extends Vue {
    record: Record = {
      type: '-',
      output: '',
      tagsPage: '',
      tagsName: '',
      note: '',
      amount: 0,
    };
    recordList: Record[] = [];
    tags: object[] = [

      {
        iconName: 'dog3',
        tagText: '宠物'
      },
      {
        iconName: 'breakfast',
        tagText: '早餐'
      },
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
      // {
      //   iconName: 'lunch',
      //   tagText: '午餐'
      // },
      // {
      //   iconName: 'dinner',
      //   tagText: '晚餐'
      // },
    ];

    onUpdateIcon(value: string) {
      this.record.tagsName = value;
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }

    onUpdatePage(value: string) {
      this.record.tagsPage = value;
    }

    saveRecord() {
      const record2 = JSON.parse(JSON.stringify(this.record));
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChanged() {
      localStorage.setItem('recordList', JSON.stringify(this.recordList));
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