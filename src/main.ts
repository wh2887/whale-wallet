import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
