import { CART_ACTION_TYPE } from '../cart/cart.type';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    // case CART_ACTION_TYPE.CLEAR_ITEM_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: cartItems,
    //     cartItemsCount: cartItemsCount,
    //     totalPrice: totalPrice,
    //   };
    // case CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: cartItems,
    //     cartItemsCount: cartItemsCount,
    //     totalPrice: totalPrice,
    //   };
    default:
      return state;
  }
};

export { cartReducer };
