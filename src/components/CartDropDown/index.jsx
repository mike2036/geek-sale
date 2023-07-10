import './index.scss';
import { Button, CartItem } from '../../components';
import { CartContext } from '../../contexts';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  // console.log(cartItems);

  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    // 关掉下拉购物车
    if (isCartOpen) {
      setIsCartOpen(false);
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
