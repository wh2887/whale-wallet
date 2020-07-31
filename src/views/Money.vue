<template>
    <div class="moneyBG">
        <Type :value.sync="record.type"/>
        <Output :update-icon="record.tagsName" :update-output="record.amount"/>
        <Tags  :record-type="record.type" @update:icon="onUpdateIcon"/>
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
  import oldStore from '@/store/index2';

  const recordList = oldStore.recordList;

  const version = window.localStorage.getItem('version') || '0';
  if (version === '0.0.1') {
    // 数据库升级  迁移数据
    recordList.forEach(record => {
      record.createdAt = new Date(2020, 6, 22);
    });
    // 保存数据
    oldStore.saveRecords();
  }

  window.localStorage.setItem('version', '0.0.2');


  @Component({
    components: {NumberPad, Notes, Tags, Output, Type},
    computed: {
    }
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



    onUpdateIcon(value: string) {
      this.record.tagsName = value;
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }

    saveRecord() {
      oldStore.createRecord(this.record);
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