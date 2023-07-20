// import { createAction } from '../../utils/reducers';
import { createAction } from '@reduxjs/toolkit';
// import { USER_ACTION_TYPES } from '../user/user.types';

// export const setCurrentUser = (user) =>
//   createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// export const checkUserSession = () =>
//   createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// export const googleSignInStart = () =>
//   createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

// export const emailSignInStart = (email, password) =>
//   createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

// export const signInSuccess = (user) =>
//   createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
// export const signInFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// export const signUpStart = (email, password, displayName) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_START, {
//     email,
//     password,
//     displayName,
//   });
// export const signUpSuccess = (user, additionalUserInfo) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
//     user,
//     additionalUserInfo,
//   });
// export const signUpFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

// export const signOutStart = () =>
//   createAction(USER_ACTION_TYPES.SIGN_OUT_START);
// export const signOutSuccess = () =>
//   createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
// export const signOutFailed = (error) =>
//   createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const setCurrentUser = createAction('user/SET_CURRENT_USER');
export const checkUserSession = createAction('user/CHECK_USER_SESSION');
export const googleSignInStart = createAction('user/GOOGLE_SIGN_IN_START');
export const emailSignInStart = createAction('user/EMAIL_SIGN_IN_START');
export const signInSuccess = createAction('user/SIGN_IN_SUCCESS');
export const signInFailed = createAction('user/SIGN_IN_FAILED');
export const signUpStart = createAction('user/SIGN_UP_START');
export const signUpSuccess = createAction('user/SIGN_UP_SUCCESS');
export const signUpFailed = createAction('user/SIGN_UP_FAILED');
export const signOutStart = createAction('user/SIGN_OUT_START');
export const signOutSuccess = createAction('user/SIGN_OUT_SUCCESS');
export const signOutFailed = createAction('user/SIGN_OUT_FAILED');
