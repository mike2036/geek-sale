import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/index';

// 用react提供的createContext来创建一个context，用来将来储存数据
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// 接下来创建一个provider，它实际上是一个用来承载上面创建的UserContext的容器组件
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      console.log('user in onAuthStateChangedListener:', user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
