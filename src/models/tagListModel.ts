const localStorageKeyName = 'tagList';

type TagListModel = {
  data: Tag[];
  clone: object;
  fetch: () => Tag[];
  create: (tagsType: Tag) => boolean;
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],
  clone() {
    return JSON.parse(JSON.stringify(this.data));
  },
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
    this.data.push(tagsType);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;
