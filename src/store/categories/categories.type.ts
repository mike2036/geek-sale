export enum CATEGORIES_ACTION_TYPE {
  // SET_CATEGORIES: 'categories/SET_CATEGORIES',
  FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE = 'categories/FETCH_CATEGORIES_FAILURE',
}

// 把类型定义放在 type 文件里

// CategoryItem 是具体的每一个商品，例如 Brown Brim 帽子
export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

// Category 是每一个商品类别，例如 Hats大类，Jackets大类 等等
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
