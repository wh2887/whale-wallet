import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// record store
window.recordList = recordListModel.fetch();
window.createRecord = (record) => recordListModel.createItem(record);
// tag store
window.tagList = tagListModel.fetch();
window.findTag = (id: string) => {
  return window.tagList.filter(item => item.id === id)[0];
};
window.createTag = (obj: Tag) => {
  if (obj) {
    try {
      tagListModel.create(obj);
    } catch (error) {
      if (error.message === 'icon duplicated') {
        window.alert('标签图标重复，请重新选择图标！');
      } else if (error.message === 'text duplicated') {
        window.alert('标签名称重复，请重新输入名称！');
      }
    }
  }
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: string, iconName: string, tagText: string) => {
  try {
    tagListModel.update(id, iconName, tagText);
  } catch (error) {
    if (error.message === 'icon duplicated') {
      window.alert('标签图标重复！请重新输入标签名！');
    } else if (error.message === 'text duplicated') {
      window.alert('标签名重复！请重新输入标签名！');
    }
    return false;
  }
  return true;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
