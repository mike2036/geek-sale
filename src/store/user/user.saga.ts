import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './user.types';
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalUserInfo,
} from '../../utils/firebase/index';

import { User } from 'firebase/auth';

// 这是一个辅助函数，它的调用时机是当google或者email用户已经完成鉴权，接下来就该此函数出场。它负责去firebase数据库处理该用户的用户数据
function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalUserInfo?: AdditionalUserInfo
) {
  try {
    // console.log('getSnapshotFromUserAuth');
    // console.log('userAuth', userAuth);
    // console.log('additionalUserInfo', additionalUserInfo);

    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalUserInfo
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* watchCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated); // 使用 takeLatest 来创建一个监听器，在匹配到相应的action时执行 isUserAuthenticated 函数
}
function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {}
}

function* watchGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// saga中，执行函数用call，派发action用put
function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup); // 从firebase api获取google回传的用户信息
    console.log('google logged in as: ', user.displayName);
    yield* call(getSnapshotFromUserAuth, user); // 派发getSnapshotFromUserAuth方法，在firebase数据库中找到与该user对应的doc
  } catch (error) {
    console.log(error);
    yield* put(signInFailed(error as Error));
  }
}

function* watchEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  // 注意这里参数的解构，其本质是一层一层的对象
  // console.log('1:', email, password);
  try {
    // 调用signInAuthUserWithEmailAndPassword，其返回值可能是userCredential或者undefined（用户名或者密码错误）
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    // 所以接下来要用条件判断筛除当userCredential存在时，会怎样怎样
    if (userCredential) {
      const { user } = userCredential; // 此时再进行解构，得到user，这样下面的user就不会报错了
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* watchSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail);
}
function* signUpWithEmail({
  payload: { email, password, displayName },
}: SignUpStart) {
  console.log('2:', email, password, displayName);
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      const additionalUserInfo = { displayName };
      yield* put(signUpSuccess({ user, additionalUserInfo })); // 通过将signUpSuccess的类型进行修正，解决了这个错误
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

function* watchSignUpSuccess() {
  yield* takeLatest(
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    signInAfterSignUpSuccess
  );
}
function* signInAfterSignUpSuccess({
  payload: { user, additionalUserInfo },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalUserInfo);
}

function* watchSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* userSaga() {
  yield* all([
    call(watchCheckUserSession),
    call(watchGoogleSignInStart),
    call(watchEmailSignInStart),
    call(watchSignUpStart),
    call(watchSignUpSuccess),
    call(watchSignOutStart),
  ]);
}
