import { CategoriesPreview, Category } from '../../pages';
import './index.scss';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  /**
   * Routes 是 react-router-dom 库提供的顶层路由容器，用于定义路由配置和渲染对应的组件
   * Route 是一个路由规则组件，用于制定特定路径下药渲染的组件
   * 在这个例子中，通过 index 属性指定根路径 / 下要渲染的组件是 CategoriesPreview
   */
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/**下面path右侧的 :category 是一个变量，表示一个动态路径，可以匹配任意路径
      例如，如果访问的路径是 /shop/hats，那么 :category 的值就是 hats
      从而匹配到该路由规则 */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
