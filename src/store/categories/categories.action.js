import { createAction } from '../../utils/reducers';
import { CATEGORIES_ACTION_TYPE } from './categories.type';

// 所以action就是 setCategoriesMap
export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
