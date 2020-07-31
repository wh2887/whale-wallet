import createdId from '@/lib/createdId';

const localStorageKeyName = 'tagList';
const tagStore = {
  tagList: [] as Tag[],
  initTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(item => item.id === id)[0];
  },
  createTag(obj: Tag) {
    const names = this.tagList.map(item => item.iconName);
    const tagTexts = this.tagList.map(item => item.tagText);
    if (names.indexOf(obj.iconName) >= 0) {
      window.alert('标签图标重复，请重新选择图标！');
    } else if (tagTexts.indexOf(obj.tagText) >= 0) {
      window.alert('标签名称重复，请重新输入名称！');
    } else {
      obj.id = createdId().toString();  // ID生成器得到的ID 为 'number'
      this.tagList && this.tagList.push(obj);
      // 可选链语法：  this.tagList?.push(obj);
      this.saveTags();
      window.alert('添加成功！');
      return true;
    }
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  updateTag(id: string, iconName: string, tagText: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const iconNames = this.tagList.map(item => item.iconName);
      const iconTotal = iconNames.reduce((a, v) => v === iconName ? a + 1 : a, 0);
      const tagTexts = this.tagList.map(item => item.tagText);
      const textTotal = tagTexts.reduce((a, v) => v === tagText ? a + 1 : a, 0);
      if (iconTotal >= 2) {
        window.alert('标签图标重复！请重新输入标签名！');
      } else if (textTotal >= 2) {
        window.alert('标签名重复！请重新输入标签名！');
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.iconName = iconName;
        tag.id = id;
        tag.tagText = tagText;
        this.saveTags();
      }
    } else {
      return false;
    }
    return true;
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
};

tagStore.initTags();

export default tagStore;
