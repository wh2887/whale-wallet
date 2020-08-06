<template>
    <div class="moneyBG">
        <Tab :value.sync="record.type " :data-source="recordTypeList"/>
        <Output :update-icon="record.tagsName" :update-output="record.amount"/>
        <Tags :record-type="record.type" @update:icon="onUpdateIcon"/>
        <Notes :value='record.note' @update:value="onUpdateNote"/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Output from '@/components/Money/Output.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import defaultRecordList from '@/constants/defaultRecordList';
  import Tab from '@/components/Money/Tab.vue';
  import recordTypeList from '@/constants/recordTypeList';


  window.localStorage.setItem('version', '0.0.2');

  @Component({
    components: {Tab, NumberPad, Notes, Tags, Output},
  })
  export default class Money extends Vue {
    record = defaultRecordList;
    recordTypeList = recordTypeList;

    get recordList() {
      return this.$store.state.recordList as RecordItem[];
    }

    created() {
      this.$store.commit('fetchRecords');
      const version = window.localStorage.getItem('version') || '0';
      if (version === '0.0.1') {
        // 数据库升级  迁移数据
        this.recordList.forEach(record => {
          record.createdAt = new Date(2020, 6, 22).toISOString();
        });
        // 保存数据
        this.$store.commit('saveRecords');
      }
    }

    onUpdateIcon(value: string) {
      this.record.tagsName = value;
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
      this.record.note = '';
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