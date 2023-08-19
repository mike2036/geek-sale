import { CategoryContainer, CategoryTitle } from './index.styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
// import { CategoriesContext } from '../../contexts';
import { ProductCard, Spinner } from '../../components/index';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categories.selector';

type CategoryPageParams = {
  category: string;
};

const Category = () => {
  // useParams是'react-router-dom'库中的钩子，用来获取当前路径中的参数
  // keyof CategoryPageParams 表示要指定一个类型，这个类型是从 CategoryPageParams 类型
  // 中选择一个属性名。相当于是说你希望推断出的参数类型是从CategoryPageParams类型中的属性名中选择的
  const { category } = useParams<
    keyof CategoryPageParams // 使用 keyof CategoryPageParams类型来指定这些参数的类型
  >() as CategoryPageParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  // 页面返回顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {/* 如果数据还未加载完成，则显示 <Spinner/> 组件 */}
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
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
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
