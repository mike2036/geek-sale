import { Button } from '../../components';
import './index.scss';
import { addItemToCart, setIsCartOpen } from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartItems,
} from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
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
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
