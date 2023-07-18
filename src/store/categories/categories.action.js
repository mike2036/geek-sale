import { createAction } from '../../utils/reducers';
import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { getCategoriesArray } from '../../utils';

// 定义异步操作的三种情况 start, success, failed
const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE, error);

// // 这是一个 thunk 函数，它的返回值也是一个函数
// const fetchCategoriesAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesArray();
//       // console.log('fetched categoriesArray:', categoriesArray);
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailed(error));
//     }
//   };
// };

export {
  // setCategories,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  // fetchCategoriesAsync,
};
