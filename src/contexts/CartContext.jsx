import { createContext, useState } from 'react';

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: null,
  cartItems: [],
  addItemToCart: () => {},
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
  // 判断 cartItems 购物车中是否已有 productToAdd 物品
  // 如果有，那么购物车中该物品的数量 +1
  // 如果没有，则在购物车中加入该物品
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// 定义 context 的容器
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // 点击事件触发逻辑：传过来的参数是用户要添加的商品
  const addItemToCart = (product) => {
    setCartItems(addCartItems(cartItems, product));
  };

  // 这一步才是把context的内容通过value加入到容器组件CartProvider中
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider, addCartItems };
