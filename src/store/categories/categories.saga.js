import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesArray } from '../../utils';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.action';
import { CATEGORIES_ACTION_TYPE } from './categories.type';

// 这是一个 Saga 函数，定义异步io操作
function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesArray); // 用call来调用io操作
    yield put(fetchCategoriesSuccess(categoriesArray)); // 用put来触发action
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

// 这也是一个 Saga 函数，用来监听action。相当于reducer
function* watchFetchCategoriesStart() {
  yield takeLatest(
    // takeLatest接受2个参数，第一个参数是action，第二个参数是一个函数；一旦action被触发，就会调用这个函数
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// 这是一个categories的入口 Saga 函数，它使用all()来并行执行多个Saga函数
export function* categoriesSaga() {
  yield all([call(watchFetchCategoriesStart)]);
}
