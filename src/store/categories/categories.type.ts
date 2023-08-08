export enum CATEGORIES_ACTION_TYPE {
  // SET_CATEGORIES: 'categories/SET_CATEGORIES',
  FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE = 'categories/FETCH_CATEGORIES_FAILURE',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
  route: string;
};

// 这是类型别名的值，表示 CategoryMap 是一个对象类型，这个对象里面有很多成员，
// 对于每一个成员，其中的键（key）是字符串类型，值是一个 CategoryItem 类型的数组。
export type CategoryMap = {
  [key: string]: CategoryItem[];
};
