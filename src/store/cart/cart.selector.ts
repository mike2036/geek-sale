import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

// 选中 store 里面的 cart slice
const selectCartSlice = (store: RootState): CartState => store.cart;

// 逐个定义需要输出的数据
const selectIsCartOpen = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.isCartOpen
);

const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cartItems
);

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

const selectCartTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export {
  selectIsCartOpen,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
};
