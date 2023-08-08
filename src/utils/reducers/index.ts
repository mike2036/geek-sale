// import { CATEGORIES_ACTION_TYPE } from '../../store/categories/categories.type';
import { AnyAction } from 'redux';

// 用 type 关键字定义一个泛型类型 Matchable
// Matchable 接受一个泛型参数 AC,同时 AC 必须是一个函数类型（没有参数）,并且
// 这个函数类型的返回值必须是 AnyAction 类型或其子类型。
// 接下来，将泛型参数AC的类型与下面的对象类型进行交叉，得到了一个新的复合类型。
// 在这个复合类型中，定义了一个type属性，其类型是使用ReturnType工具类型来获
// 取AC类型的返回类型，并进一步获取这个返回类型的type属性的类型
// 接下来定义一个match方法，接收一个参数，类型为AnyAction，其返回值的类型是一
// 个类型谓词函数，用于判断传入的action是否是AC函数返回的对象类型。
// 综上，Matchable类型是一个复合类型，它表示一个满足特定条件的函数类型AC，该函
// 数类型的返回值是一个带有type属性，以及match方法的对象。其中match方法可以判断
// 传入的action是否是AC函数返回的对象类型。
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

// 这是一个函数声明，尖括号里的AC是泛型参数，extends关键字对AC进行进一步定义
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

// 这是一个函数声明的重载
export function withMatcher<
  AC extends (...args: any) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// 这是函数的实现
export function withMatcher(actionCreator: Function) {
  // 没有泛型
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    // 这里传进来的参数action，其实是将来要match的action，是人为定义的
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

// 定义一个泛型类型 ActionWithPayload，它接受两个类型参数 T 和 P
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// 定义一个泛型类型 Action，它接受一个类型参数 T
export type Action<T> = {
  type: T;
};

// 定义函数重载，函数名为 createAction，接受两个类
// 型参数 T 和 P ，并返回 ActionWithPayload <T, P> 类型的对象
export function createAction<T, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// 定义函数重载，函数名为 createAction，接受一个类
// 型的参数 T，并返回 Action<T> 类型的对象
export function createAction<T>(type: T, payload: void): Action<T>;

// 定义实际函数 createAction，根据传入的参数个数和类型来选择合适的函数重载
export function createAction<T, P>(type: T, payload: P) {
  return { type, payload };
}
