import './index.scss';
import { Button, CartItem } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropDown = () => {
  const dispatch = useDispatch();

  // const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  // console.log(cartItems);
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    // 关掉下拉购物车
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
    }

    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Empty</span>
        )}
      </div>
      <Button onClick={gotoCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
