import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createdId from '@/lib/createdId';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    createRecordError: null,
    tagList: [] as Tag[],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(item => item.id === id)[0];
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2 = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    initTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', {id: '', iconName: 'sancan', type: '-', tagText: '餐饮'});
        store.commit('createTag', {id: '', iconName: 'hongBao', type: '+', tagText: '红包'});
      }
    },
    createTag(state, obj: Tag) {
      const names = state.tagList.map(item => item.iconName);
      const tagTexts = state.tagList.map(item => item.tagText);
      if (names.indexOf(obj.iconName) >= 0) {
        window.alert('标签图标重复，请重新选择图标！');
      } else if (tagTexts.indexOf(obj.tagText) >= 0) {
        window.alert('标签名称重复，请重新输入名称！');
      } else {
        obj.id = createdId().toString();  // ID生成器得到的ID 为 'number'
        state.tagList && state.tagList.push(obj);
        // 可选链语法：  this.tagList?.push(obj);
        store.commit('saveTags');
      }
    },
    updateTag(state, payload: { id: string; iconName: string; tagText: string }) {
      const {id, iconName, tagText} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const iconNames = state.tagList.map(item => item.iconName);
        const iconTotal = iconNames.reduce((a, v) => v === iconName ? a + 1 : a, 0);
        const tagTexts = state.tagList.map(item => item.tagText);
        const textTotal = tagTexts.reduce((a, v) => v === tagText ? a + 1 : a, 0);
        if (iconTotal >= 2) {
          window.alert('标签图标重复！请重新输入标签名！');
        } else if (textTotal >= 2) {
          window.alert('标签名重复！请重新输入标签名！');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          if (iconName === '') {
            window.alert('标签图标不能为空，请重新输入！');
          } else if (tagText === '') {
            window.alert('标签名不能为空，请重新输入！');
          } else {
            tag.iconName = iconName;
            tag.id = id;
            tag.tagText = tagText;
            store.commit('saveTags');
          }
        }
      }
    },

    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        window.alert('删除成功！');
        router.back();
      } else {
        window.alert('删除失败！');
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {}
});


export default store;