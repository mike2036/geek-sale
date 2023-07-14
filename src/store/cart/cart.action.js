import { createAction } from '../../utils/reducers';
import { CART_ACTION_TYPE } from './cart.type';

// 定义用户交互
// 注意，这里虽然有5个用户交互，但实际上，只用了2个 action type
const setIsCartOpen = (newIsCartOpen) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, newIsCartOpen);

const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems);

// 点击事件触发逻辑：传过来两个参数，一是原cartItems，二是用户要添加的商品
const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItems(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// ****************************************************************

// 下面都是辅助函数 helper functions
// 辅助函数 1：用户点击“加到购物车”以后，向购物车中添加商品
const addCartItems = (cartItems, productToAdd) => {
  // 先判断 cartItems 购物车中是否已有 productToAdd 物品
  // 如果有，那么购物车中该物品的数量 +1。为了实现 immutable，我们用map方法创建一个新的数组
  // 如果没有，则在购物车中加入该物品
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// 辅助函数 2：从购物车中减掉某个物品，减掉1个数量。返回更新后的购物车清单
const removeCartItem = (cartItems, cartItemToRemove) => {
  /**先判断要 remove 的商品的数量是否大于1，如果是，则数量减1
   * 然后判断数量是否等于1，如果是，则删掉这个商品
   * 其他情况，返回错误
   */
  const existingCartItem = cartItems.find((item) => {
    return item.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  } else if (existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

// 辅助函数 3：从购物车中减掉某个物品，减掉所有该物品。返回更新后的购物车清单
const clearCartItem = (cartItems, cartItemToRemove) => {
  // 直接从购物车中删掉该物品
  return cartItems.filter((item) => item.id !== cartItemToRemove.id && item);
};

export {
  setIsCartOpen,
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
};
