import { Home, Shop, Navigation, Authentication, Checkout } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {
  // redux只会生成一个dispatch
  const dispatch = useDispatch();

  // 使用useEffect钩子函数创建了一个副作用，监听身份验证状态的变化
  // 当身份验证状态发生变化时,调用setCurrentUser函数更新currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // console.log('user in onAuthStateChangedListener:', user);
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

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
