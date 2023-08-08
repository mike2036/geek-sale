import { FC } from 'react';
import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  CartItemName,
} from './index.styles';
import { CartItem as TCartItem } from '../../store/cart/cart.type';

type CartItemProps = {
  cartItem: TCartItem;
};

// 我们创建了一个名为CartItem的FC函数组件，其属性类型为CartItemProps
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImg alt={`${name}`} src={imageUrl} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>{`${quantity} x $${price}`}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
