type RecordItem = {
  type: string;
  output: string;
  tagsName: string;
  note: string;
  amount: number;
  createdAt?: Date;
}
type Tag = {
  id: string;
  iconName: string;
  tagText: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (tagsType: Tag) => boolean;
  update: (id: string, iconName: string, tagText: string) => boolean;
  remove: (id: string) => boolean;
  save: () => void;
}

interface Window {
  tagList: Tag[];
  createTag: (obj: Tag) => void;
  removeTag: (id: string) => boolean;
  updateTag: TagListModel['update'];
  findTag: (id: string) => Tag | undefined;

  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}

