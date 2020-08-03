type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  type: string;
  output: string;
  tagsName: string;
  note: string;
  amount: number;
  createdAt?: string;
}
type Tag = {
  id: string;
  iconName: string;
  tagText: string;
}

// interface Window {
// }

