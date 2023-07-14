import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares = [];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export { store };
