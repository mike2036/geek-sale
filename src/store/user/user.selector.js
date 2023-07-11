
// 使用 useSelector 方法，传入一个回调函数，拿到我们想要的用户状态数据 currentUser
const selectCurrentUser = (state) => state.user.currentUser;

export { selectCurrentUser };
