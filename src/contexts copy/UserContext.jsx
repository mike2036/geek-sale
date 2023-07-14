import { createContext, useReducer } from 'react'; // 这里也引入了useReducer钩子函数

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

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider, USER_ACTION_TYPES };
