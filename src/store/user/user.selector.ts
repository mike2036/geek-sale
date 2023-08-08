import { createSelector } from 'reselect';
import { UserState } from '../user/user.reducer';
import { RootState } from '../store';

const selectUserSlice = (state: RootState): UserState => state.user;

// 使用 useSelector 方法，传入一个回调函数，拿到我们想要的用户状态数据 currentUser
export const selectCurrentUser = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.currentUser
);
