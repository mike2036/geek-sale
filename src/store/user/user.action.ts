// import { createAction } from '../../utils/reducers';
import { createAction } from '@reduxjs/toolkit';

import { UserData, AdditionalUserInfo } from '../../utils/firebase/index';

import { USER_ACTION_TYPES } from '../user/user.types';

import { User } from 'firebase/auth';

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

export const setCurrentUser = createAction<
  UserData,
  USER_ACTION_TYPES.SET_CURRENT_USER
>(USER_ACTION_TYPES.SET_CURRENT_USER);

export const checkUserSession = createAction(
  USER_ACTION_TYPES.CHECK_USER_SESSION
);

export const googleSignInStart = createAction(
  USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
);

export type EmailSignInStart = {
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
};
export const emailSignInStart = createAction<
  { email: string; password: string },
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START
>(USER_ACTION_TYPES.EMAIL_SIGN_IN_START);
export const signInSuccess = createAction<
  UserData & { id: string },
  USER_ACTION_TYPES.SIGN_IN_SUCCESS
>(USER_ACTION_TYPES.SIGN_IN_SUCCESS);
export const signInFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_IN_FAILED
>(USER_ACTION_TYPES.SIGN_IN_FAILED);

export type SignUpStart = {
  type: USER_ACTION_TYPES.SIGN_UP_START;
  payload: {
    email: string;
    password: string;
    displayName: string;
  };
};
export const signUpStart = createAction<
  { email: string; password: string; displayName: string },
  USER_ACTION_TYPES.SIGN_UP_START
>(USER_ACTION_TYPES.SIGN_UP_START);

export type SignUpSuccess = {
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS;
  payload: {
    user: User;
    additionalUserInfo: {};
  };
};
export const signUpSuccess = createAction<
  { user: User; additionalUserInfo: AdditionalUserInfo },
  USER_ACTION_TYPES.SIGN_UP_SUCCESS
>(USER_ACTION_TYPES.SIGN_UP_SUCCESS);
export const signUpFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_UP_FAILED
>(USER_ACTION_TYPES.SIGN_UP_FAILED);

export const signOutStart = createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSuccess = createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_OUT_FAILED
>(USER_ACTION_TYPES.SIGN_OUT_FAILED);
