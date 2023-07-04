import './index.scss';
import { Button, CartItem } from '../../components';
import { CartContext } from '../../contexts';
import { useContext } from 'react';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Empty</span>
        )}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
