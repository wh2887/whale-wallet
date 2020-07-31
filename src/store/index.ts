import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createdId from '@/lib/createdId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    initTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, obj: Tag) {
      const names = state.tagList.map(item => item.iconName);
      const tagTexts = state.tagList.map(item => item.tagText);
      if (names.indexOf(obj.iconName) >= 0) {
        return window.alert('标签图标重复，请重新选择图标！');
      } else if (tagTexts.indexOf(obj.tagText) >= 0) {
        return window.alert('标签名称重复，请重新输入名称！');
      } else {
        obj.id = createdId().toString();  // ID生成器得到的ID 为 'number'
        state.tagList && state.tagList.push(obj);
        // 可选链语法：  this.tagList?.push(obj);
        store.commit('saveTags');
        window.alert('添加成功！');
        return true;
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {}
});


export default store;