import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/index';

// 用react提供的createContext来创建我们的 UserContext，用来储存用户数据
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// 接下来创建一个provider，它实际上是一个用来承载上面创建的UserContext的容器组件
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // 定义一个副作用，定义监听器的回调函数，回调函数作为监听器的参数传进去
  // 回调函数的功能是只要监听到auth的状态发生变化，那么就调用setter函数setCurrentUser把新的user写到context里面
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // console.log('user in onAuthStateChangedListener:', user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
