import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils';

const CategoriesContext = createContext({
  categoriesMap: {},
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // // 向firestore数据库写入数据
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA, 'title');
  // }, []);

  useEffect(() => {
    // useEffect的第一个参数是回调函数，避免把它写成异步函数，因为为了避免竞态，effect的回调必须是同步的才行
    const getCategoriesMap = async () => {
      const categoriesMapFetched = await getCategoriesAndDocuments();
      // console.log('fetched categories:', categoriesMapFetched);
      setCategoriesMap(categoriesMapFetched);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap }; // 注意，这里右侧的 categoriesMap 实际上是 categoriesMap: categoriesMap 的简写
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export { CategoriesContext, CategoriesProvider };

/**
 * 1.写好模板代码
 * const ProductContext = createContext({});
 * const ProductsProvider = ({ children }) => {
 *   return <ProductContext.Provider>{children}</ProductContext.Provider>};
 * 2.接下来，我们需要把一个记录了产品信息的数组，存放到context里面。所以就在createContext()的参数对象里，写入一个:products:[]
 * 3.接下来，既然context里面有了内容，那么就需要使用useState来管理这个内容，同时把初始值设为初始数据PRODUCTS
 * 4.接下来，把products放到value里，传给ShopContext.Provider组件，这个组件实际上是一个用于提供context值的容器，value是一个传给该组件的属性，value指定了要共享的context值
 * 综合：通过将children子组件作为ProductsProvider的子元素传递进来，以便在整个组件树种共享该上下文值
 *
 */
