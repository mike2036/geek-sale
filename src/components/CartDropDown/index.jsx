import './index.scss';
import { Button } from '../../components';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
