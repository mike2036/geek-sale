import { createSelector } from 'reselect';

const selectUserSlice = (store) => store.user;

// 使用 useSelector 方法，传入一个回调函数，拿到我们想要的用户状态数据 currentUser
const selectCurrentUser = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.currentUser
);

export { selectCurrentUser };
