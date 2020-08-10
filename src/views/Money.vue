<template>
    <div class="moneyBG">
        <Tab :value.sync="record.type " :data-source="recordTypeList"/>
        <Output :update-icon="record.tags.iconName" :update-output="record.amount"/>
        <Tags :record-type="record.type" @update:tag="onUpdateTag" class="tags"/>
        <Notes :value.sync="record.note"/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <div class="space"></div>
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

    onUpdateTag(value: Tag) {
      this.record.tags.iconName = value.iconName;
      this.record.tags.tagText = value.tagText;
      this.record.tags.type = value.type;
    }

    onUpdateNote(value: string) {
      this.record.note = value;
    }

    saveRecord() {
      if (this.record.tags.iconName === '') {
        window.alert('请选择一个图标分类！');
      } else {
        this.$store.commit('createRecord', this.record);
        if (this.$store.state.createRecordError === null) {
          window.alert('已保存');
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

    .moneyBG ::v-deep {
        display: flex;
        flex-direction: column;

        > .space {
            width: 100%;
            height: 12vh;
        }

        > .tags {
            margin-top: 8px;
            border-radius: 10px;
            height: 21vh;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none
            }
        }
    }
</style>