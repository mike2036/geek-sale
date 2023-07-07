import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts';
import { ProductCard } from '../../components';
import './index.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext); // 先从CategoriesContext导入 categoriesMap
  console.log('categoriesMap in Shop:', categoriesMap);
  return (
    // JSX只能有一个顶部元素，所以下面要用1个幽灵元素把所有代码包裹起来
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="product-container">
            {categoriesMap[title].map((item) => {
              return <ProductCard key={item.id} product={item}></ProductCard>;
            })}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
