import { Button } from '../../components';
import './index.scss';
import { CartContext } from '../../contexts';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
    // 当用户点击“加入到购物车”，自动打开右上角购物车
    if (!isCartOpen) {
      setIsCartOpen(true);
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
