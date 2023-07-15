// 从reselect库中引入选择器创建函数createSelector
import { createSelector } from 'reselect';

// 从store中获取categories slice
const selectCategoriesSlice = (store) => store.categories;

// createSelector创建的选择器
// 通过createSelector创建选择器，她接受两个参数，第一个是一组输入选择器
// 第二个是结果函数，用于计算
const selectCategoriesMap = createSelector(
  [selectCategoriesSlice],
  (categoriesSlice) =>
    categoriesSlice.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

const selectCategoriesIsLoading = createSelector(
  [selectCategoriesSlice],
  (categoriesSlice) => categoriesSlice.isLoading
);

export { selectCategoriesMap, selectCategoriesIsLoading };

/**
 * 'useSelector'用于在组件中选择 Redux store 中的状态，并在组建重新渲染时自动订阅和更新。它接收一个选
 * 择器函数作为参数。
 *
 * 'createSelector'用于创建复杂的选择器函数，可以组合多个输入选择器，并使用结果函数进行计算。同时她具
 * 有缓存功能，可以根据输入选择器的返回值进行缓存，减少不必要的计算。
 */
