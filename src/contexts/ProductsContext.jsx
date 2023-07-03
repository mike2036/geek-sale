import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products }; // 注意，这里右侧的 products 实际上是 products: products 的简写
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };

/**
 * 1.写好模板代码
 * const ProductContext = createContext({});
 * const ProductsProvider = ({ children }) => {
 *   return <ProductContext.Provider>{children}</ProductContext.Provider>};
 * 2.接下来，我们需要把一个记录了产品信息的数组，存放到context里面。所以就在createContext()的参数对象里，写入一个:products:[]
 * 3.接下来，既然context里面有了内容，那么就需要使用useState来管理这个内容，同时把初始值设为初始数据PRODUCTS
 * 4.接下来，把products放到value里，传给ShopContext.Provider组件，这个组件实际上是一个用于提供context值的容器，value是一个传给该组件的属性，value指定了要共享的context值
 * 综合：通过将children子组件作为ProductsProvider的子元素传递进来，以便在整个组件树种共享该上下文值
 *
 */
