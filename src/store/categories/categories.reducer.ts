import { Category } from './categories.type';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = createReducer(
  CATEGORIES_INITIAL_STATE,
  (builder) => {
    builder
      .addCase(fetchCategoriesStart, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesSuccess, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoriesFailed, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  }
);

// 下面是第二代match写法
// const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action: AnyAction
// ): CategoriesState => {
//   if (fetchCategoriesStart.match(action)) {
//     return { ...state, isLoading: true };
//   }

//   if (fetchCategoriesSuccess.match(action)) {
//     return { ...state, categories: action.payload, isLoading: false };
//   }

//   if (fetchCategoriesFailed.match(action)) {
//     return { ...state, error: action.payload, isLoading: false };
//   }

//   return state;
// 下面是第一代 case 语句
// switch (action.type) {
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
//     return { ...state, isLoading: true };
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
//     return { ...state, categories: action.payload, isLoading: false };
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE:
//     return { ...state, error: action.payload, isLoading: false };
//   default:
//     return state;
// }
