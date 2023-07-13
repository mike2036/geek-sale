import { Fragment } from 'react';
import { CategoryPreview } from '../../components';
import { useSelector, shallowEqual } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap, shallowEqual);
  // console.log('categoriesMap:', categoriesMap);

  return (
    // JSX只能有一个顶部元素，所以下面要用1个幽灵元素把所有代码包裹起来
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
        /**
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="product-container">
            {categoriesMap[title].map((item) => {
              return <ProductCard key={item.id} product={item}></ProductCard>;
            })}
          </div>
        </Fragment>
        */
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
