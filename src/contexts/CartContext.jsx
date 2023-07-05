import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  removeItemFromCart: () => {},
});

/** schema of the cartItems array:
 * {
 *  id: number,
 *  name: string,
 *  price: number,
 *  quantity: number,
 * }
 */

// 逻辑模块：用户点击“加到购物车”以后，向购物车中添加商品
const addCartItems = (cartItems, productToAdd) => {
  // 然后判断 cartItems 购物车中是否已有 productToAdd 物品
  // 如果有，那么购物车中该物品的数量 +1。为了实现 immutable，我们用map方法创建一个新的数组
  // 如果没有，则在购物车中加入该物品
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) => (item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, cartItemToRemove) => {
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
    return cartItems.map((item) => (item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
  }
};

// 定义 context 的容器
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const newCartItemsCount = () => cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    setCartItemsCount(newCartItemsCount);
  }, [cartItems]);

  // useEffect(() => {
  //   const newCartItemsCount = () => cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
  //   setCartItemsCount(newCartItemsCount);
  // }, [cartItems]);

  // 点击事件触发逻辑：传过来的参数是用户要添加的商品
  const addItemToCart = (product) => {
    setCartItems(addCartItems(cartItems, product));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItems(cartItems, cartItemToRemove));
  };

  // 这一步才是把context的内容通过value加入到容器组件CartProvider中
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemsCount,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider, addCartItems };
