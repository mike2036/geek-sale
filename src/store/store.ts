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
  whitelist: ['cart'], // 只将store里的cart部分，缓存到本地存储
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
  // 下面的middleware，先将serializableCheck middleware给关闭了，然后在末尾加上了自己的middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga); // 当你调用 sagaMiddleware.run() 时，Redux Saga 内部会实例化 rootSaga，并且开始执行它，直到遇到第一个 yield 语句。其内部自动管理Generator的执行流程。

const persistor = persistStore(store);

export { store, persistor };
