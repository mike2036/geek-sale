// import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
// 使用localStorage进行存储
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';

import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root', //从 root 开始，都要persist
  storage, // 使用localStorage进行存储
  blacklist: ['user'], // store 里面的u user slice， 不要进行persist
};
// 调用 persistReducer() 创建 persistedReducer，传入2个参数，一个是上面定义的 persistConfig，另一个是 rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 利用createSagaMiddleware工厂函数创建单一的sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, loggerMiddleware];

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// 用 persistedReducer 替换原来的 rootReducer
// const store = createStore(persistedReducer, undefined, composedEnhancers);
// configureStore默认内置了这些中间件：
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production', // 增加 sagaMiddleware
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
