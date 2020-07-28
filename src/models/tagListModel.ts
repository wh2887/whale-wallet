const localStorageKeyName = 'tagList';

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (tagsType: Tag) => boolean;
  update: (id: string, iconName: string, tagText: string) => 'success' | 'not found' | 'duplicated';
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
    this.data.push(tagsType);
    this.save();
    return true;
  },
  update(id, iconName, tagText) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const iconNames = this.data.map(item => item.iconName);
      if (iconNames.indexOf(iconName) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.iconName = iconName;
        tag.tagText = tagText;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;
