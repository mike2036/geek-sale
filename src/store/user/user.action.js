import { createAction } from '../../utils/reducers';
import { USER_ACTION_TYPES } from '../user/user.types';

// 定义setCurrentUser函数，用于出发dispatch
const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export { setCurrentUser };
