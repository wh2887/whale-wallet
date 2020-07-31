import tagStore from '@/store/tagStore';
import recordStore from '@/store/recordStore';

const store = {
  //浅拷贝，直接把地址拷贝过来    所有引用这些对象的地方都是对这个地址的东西的改变所以能改变。
  ...tagStore,
  ...recordStore
};

console.log(store);

export default store;
