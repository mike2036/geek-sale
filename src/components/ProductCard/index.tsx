import { FC } from 'react';
import { ProductCardContainer, Footer, Name, Price } from './index.styles';
import { BUTTON_TYPE_CLASSES, Button } from '../Button/index';
import { CategoryItem as TCategoryItem } from '../../store/categories/categories.type';
import { addItemToCart, setIsCartOpen } from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartItems,
} from '../../store/cart/cart.selector';

type ProductCardProps = {
  product: TCategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    // 当用户点击“加入到购物车”，自动打开右上角购物车

    if (!isCartOpen) {
      dispatch(setIsCartOpen(true));
    }
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
