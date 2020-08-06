type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  type: string;
  output: string;
  tags: Tag[];
  note: string;
  amount: number;
  createdAt?: string;
}
type Tag = {
  id: string;
  iconName: string;
  type: string;
  tagText: string;
}

