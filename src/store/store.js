import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
// 使用localStorage进行存储
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root', //从 root 开始，都要persist
  storage, // 使用localStorage进行存储
  blacklist: ['user'], // store 里面的u user slice， 不要进行persist
};
// 调用 persistReducer() 创建 persistedReducer，传入2个参数，一个是上面定义的 persistConfig，另一个是 rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// [].filter(Boolean) 过滤掉数组内所有的falsy值，false, null, undefined, 0, NaN, 空字符串
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

// 引入 redux dev tools
// 如果当前环境不是生产环境且存在 Redux DevTools 扩展，则使用 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 函数作为增强器（compose）
// 如果条件不满足，则使用 Redux 提供的默认增强器（compose）
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// 详细解释：
// (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
// process.env.NODE_ENV !== 'production': 这个条件判断当前环境是否为生产环境。process.env.NODE_ENV 是一个 Node.js 环境变量，通常由构建工具（如 webpack）根据构建模式设置。这个条件表达式返回 true 或 false。
// window: 这个条件检查是否在浏览器环境下。window 是浏览器全局对象，如果存在，则条件为真。
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: 这个条件检查是否存在 Redux DevTools 扩展的 compose 函数。这个函数通常由 Redux DevTools 插件提供，用于增强 Redux 的中间件链。
// 如果上述三个条件都满足，则整个条件表达式返回 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 函数。这意味着开发环境且浏览器环境下存在 Redux DevTools 扩展，我们将使用这个函数作为 Redux 的增强器。
// || compose  如果上述条件表达式的结果为假（即没有找到 Redux DevTools 扩展），则使用 Redux 提供的默认增强器 compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// 用 persistedReducer 替换原来的 rootReducer
const store = createStore(persistedReducer, undefined, composedEnhancers);
const persistor = persistStore(store);

export { store, persistor };
