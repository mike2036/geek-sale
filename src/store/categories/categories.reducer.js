import { CATEGORIES_ACTION_TYPE } from './categories.type';

const CATEGORIES_INITIAL_STATE = {
  categories: [],

  isLoading: false,
  error: null,
};

// reducer 是纯函数，作用是更新 state 的值
const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

export { categoriesReducer };
