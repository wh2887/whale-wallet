import tagListModel from '@/models/tagListModel';

export default {

  //tagList store
  init() {
    return this.tagList;
  },
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(item => item.id === id)[0];
  },
  createTag: (obj: Tag) => {
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
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, iconName: string, tagText: string) => {
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
  },
};
