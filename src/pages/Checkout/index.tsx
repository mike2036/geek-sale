import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './index.styles';
import { CheckoutItem } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  // const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <Total>{`Total: $${cartTotalPrice}`}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
