import { CartItem } from './cart.type';
// import { AnyAction } from 'redux';
import { setIsCartOpen, setCartItems } from './cart.action';
import { createReducer } from '@reduxjs/toolkit';

// 定义初始值的类型
export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

// 定义初始值
const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = createReducer(CART_INITIAL_STATE, (builder) => {
  builder
    .addCase(setIsCartOpen, (state, action) => {
      state.isCartOpen = action.payload;
    })
    .addCase(setCartItems, (state, action) => {
      state.cartItems = action.payload;
    });
});
// 下面是第二代 match写法
// const cartReducer = (
//   state = CART_INITIAL_STATE,
//   action: AnyAction
// ): CartState => {
//   if (setIsCartOpen.match(action)) {
//     return { ...state, isCartOpen: action.payload };
//   }

//   if (setCartItems.match(action)) {
//     return { ...state, cartItems: action.payload };
//   }

//   return state;

// 下面是第一代 switch 写法：
// switch (action.type) {
//   case CART_ACTION_TYPE.SET_IS_CART_OPEN:
//     return {
//       ...state,
//       isCartOpen: action.payload,
//     };
//   case CART_ACTION_TYPE.SET_CART_ITEMS:
//     return {
//       ...state,
//       cartItems: action.payload,
//     };

//   default:
//     return state;
// }
// };
