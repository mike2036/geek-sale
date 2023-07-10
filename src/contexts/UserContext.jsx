import { createContext, useEffect, useReducer } from 'react'; // 这里也引入了useReducer钩子函数
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/index';
import { createAction } from '../utils';

// 创建一个UserContext，并初始化了一个包含currentUser和setCurrentUser的对象作为默认值
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// 定义常亮对象，用于定义操作类型
const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

// 定义初始状态
const INITIAL_STATE = {
  currentUser: null,
};

// 定义userReducer函数，接收state和action，输出新的state
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type} in userReducer`);
  }
};

// 创建一个provider，它实际上是一个用来承载上面创建的UserContext的容器组件
const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // 不使用上面的useState()，而是用下面的useReducer来代替
  //
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // 定义setCurrentUser函数，用于出发dispatch
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  // 使用useEffect钩子函数创建了一个副作用，监听身份验证状态的变化
  // 当身份验证状态发生变化时,调用setCurrentUser函数更新currentUser
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

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider, USER_ACTION_TYPES };
