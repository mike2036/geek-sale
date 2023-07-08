import { Home, Shop, Navigation, Authentication, Checkout } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* “ /shop/* ” 右侧的 * 是通配符，表示可以匹配任意子路径 */}
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
