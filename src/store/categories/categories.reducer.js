import { CATEGORIES_ACTION_TYPE } from './categories.type';

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export { categoriesReducer };