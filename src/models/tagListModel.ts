import createdId from '@/lib/createdId';

const localStorageKeyName = 'tagList';

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (tagsType: Tag) => boolean;
  update: (id: string, iconName: string, tagText: string) => boolean;
  remove: (id: string) => boolean;
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(tagsType) {
    const names = this.data.map(item => item.iconName);
    const tagTexts = this.data.map(item => item.tagText);
    if (names.indexOf(tagsType.iconName) >= 0) {
      throw new Error('icon duplicated');
    } else if (tagTexts.indexOf(tagsType.tagText) >= 0) {
      throw new Error('text duplicated');
    }
    tagsType.id = createdId().toString();  // ID生成器得到的ID 为 'number'
    this.data.push(tagsType);
    this.save();
    return true;
  },
  update(id, iconName, tagText) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const iconNames = this.data.map(item => item.iconName);
      const iconTotal = iconNames.reduce((a, v) => v === iconName ? a + 1 : a, 0);
      const tagTexts = this.data.map(item => item.tagText);
      const textTotal = tagTexts.reduce((a, v) => v === tagText ? a + 1 : a, 0);
      if (iconTotal >= 2) {
        throw new Error('icon duplicated');
      } else if (textTotal >= 2) {
        throw new Error('text duplicated');
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.iconName = iconName;
        tag.id = id;
        tag.tagText = tagText;
        this.save();
      }
    } else {
      return false;
    }
    return true;
  },

  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;
