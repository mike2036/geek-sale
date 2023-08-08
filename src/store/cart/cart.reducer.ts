import { CartItem } from './cart.type';
import { AnyAction } from 'redux';
import { setIsCartOpen, setCartItems } from './cart.action';

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

const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  return state;

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
};

export { cartReducer };
