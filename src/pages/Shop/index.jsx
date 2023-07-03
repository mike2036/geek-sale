import { useContext } from 'react';
import { ProductsContext } from '../../contexts';
import { ProductCard } from '../../components';
import './index.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  // console.log(products);
  return (
    <div className="product-container">
      {products.map(item => {
        return <ProductCard key={item.id} product={item}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
