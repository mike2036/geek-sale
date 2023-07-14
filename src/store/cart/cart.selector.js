import { createSelector } from 'reselect';

// 选中 store 里面的 cart slice
const selectCartSlice = (store) => store.cart;

// 逐个定义需要输出的数据
const selectIsCartOpen = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.isCartOpen
);

const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cartItems
);

const selectCartItemsCount = createSelector([selectCartSlice], (cartSlice) =>
  cartSlice.cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

const selectCartTotalPrice = createSelector([selectCartSlice], (cartSlice) =>
  cartSlice.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export {
  selectIsCartOpen,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
};
