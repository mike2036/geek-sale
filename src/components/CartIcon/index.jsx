import { ReactComponent as ShoppingIcon } from '../../assets/pics/shopping-bag.svg';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch();

  // const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);
  // const { cartItemsCount } = useContext(CartContext);

  // 从 cart.selector 中取出 isCartOpen 和 cartItemsCount
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
