import {
  Home,
  Shop,
  Navigation,
  Authentication,
  Checkout,
  ErrorPage,
} from './pages';
// import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useEffect } from 'react';

import { checkUserSession } from './store/user/user.action';
import { useDispatch } from 'react-redux';

// 创建一个router实例
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/shop/*',
        element: <Shop />,
      },
      {
        path: '/auth',
        element: <Authentication />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  // redux只会生成一个dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    // <Routes>
    //   <Route path="/" element={<Navigation />}>
    //     <Route index element={<Home />} />
    //     {/* “ /shop/* ” 右侧的 * 是通配符，表示可以匹配任意子路径 */}
    //     <Route path="/shop/*" element={<Shop />} />
    //     <Route path="/auth" element={<Authentication />} />
    //     <Route path="/checkout" element={<Checkout />} />
    //   </Route>
    // </Routes>
    <RouterProvider router={router} />
  );
};

export default App;
