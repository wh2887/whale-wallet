<template>
    <div class="moneyBG">
        <Type :value.sync="record.type"/>
        <Output :update-icon="record.tagsName" :update-output="record.amount"/>
        <Tags :tag-data-source="tags" :tags-page="tagsPage" :record-type="record.type" @update:icon="onUpdateIcon"/>
        <Notes @update:value="onUpdateNote"/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
  import store from '@/store/index2';

  const recordList = store.recordList;

  const version = window.localStorage.getItem('version') || '0';
  if (version === '0.0.1') {
    // 数据库升级  迁移数据
    recordList.forEach(record => {
      record.createdAt = new Date(2020, 6, 22);
    });
    // 保存数据
    store.saveRecords();
  }

  window.localStorage.setItem('version', '0.0.2');


  @Component({
    components: {NumberPad, Notes, Tags, Output, Type}
  })
  export default class Money extends Vue {
    record: RecordItem = {
      type: '-',
      output: '',
      tagsName: '',
      note: '',
      amount: 0,
    };
    recordList: RecordItem[] = recordList;
    tags = store.tagList;
    tagsPage: object = {page: 0, residue: 0};

    mounted() {
      // const page = Math.floor(this.tags.length / 7);
      // const residue = this.tags.length - 7 * page;
      // this.tagsPage = {page: page, residue: residue};
      // return this.tagsPage;
    }

    onUpdateIcon(value: string) {
      this.record.tagsName = value;
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }


    saveRecord() {
      store.createRecord(this.record);
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