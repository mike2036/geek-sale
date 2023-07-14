import './index.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
// import { CategoriesContext } from '../../contexts';
import { ProductCard } from '../../components';
import { useSelector, shallowEqual } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
  // 使用 useParams() 钩子来获取当前路径中的
  const { category } = useParams();
  // console.log('category:', category);

  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap, shallowEqual);
  // console.log('categoriesMap:', categoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/*
      注意下面左侧的‘products &&’，这是一个安全机制，当且仅当products存在的时候
      再进行渲染。
      因为 products 是从外部数据源异步获取，但是下面的渲染逻辑是同步逻辑，所以
      需要增加一个安全机制，确保没有数据的时候就不进行渲染
       */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
