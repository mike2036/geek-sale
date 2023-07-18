import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
} from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils';

// 这是一个辅助函数，它的调用时机是当google或者email用户已经完成鉴权，接下来就该此函数出场。它负责去firebase数据库处理该用户的用户数据
function* getSnapshotFromUserAuth(userAuth, additionalUserInfo) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalUserInfo
    );
    yield put(signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id }));
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

function* watchCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {}
}

function* watchGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// saga中，执行函数用call，派发action用put
function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup); // 从firebase api获取google回传的用户信息
    console.log('google logged in as: ', user.displayName);
    yield call(getSnapshotFromUserAuth, user); // 派发getSnapshotFromUserAuth方法，在firebase数据库中找到与该user对应的doc
  } catch (error) {
    console.log(error);
    yield put(signInFailed(error));
  }
}

function* watchEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
function* signInWithEmail({ payload: { email, password } }) {
  // 注意这里参数的解构，其本质是一层一层的对象
  console.log('1:', email, password);
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* watchSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail);
}
function* signUpWithEmail({ payload: { email, password, displayName } }) {
  console.log('2:', email, password, displayName);
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* watchSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}
function* signInAfterSignUpSuccess({ payload: { user, additionalUserInfo } }) {
  yield call(getSnapshotFromUserAuth, user, additionalUserInfo);
}

function* watchSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* userSaga() {
  yield all([
    call(watchCheckUserSession),
    call(watchGoogleSignInStart),
    call(watchEmailSignInStart),
    call(watchSignUpStart),
    call(watchSignUpSuccess),
    call(watchSignOutStart),
  ]);
}
