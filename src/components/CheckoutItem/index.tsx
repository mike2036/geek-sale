import {
  CheckoutItemContainer,
  ImgContainer,
  Img,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from './index.styles';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';
import { CartItem as TCartItem } from '../../store/cart/cart.type';

type CheckoutItemProps = {
  cartItem: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  // 为什么要把事件处理器单独拿出来，因为将来如果你要修改事件处理器的定义，可以很容易地找到处理器的定义，然后进行修改。
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <Img src={imageUrl} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
