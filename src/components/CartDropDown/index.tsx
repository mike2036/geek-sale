import {
  CartDropdownContainer,
  EmptyMessage,
  StyledCartItems,
} from './index.styles';
import { Button, CartItem } from '../';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { BUTTON_TYPE_CLASSES } from '../Button';

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
    <CartDropdownContainer>
      <StyledCartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Empty</EmptyMessage>
        )}
      </StyledCartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={gotoCheckoutHandler}
      >
        Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
