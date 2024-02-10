import { createReducer } from '@reduxjs/toolkit';
// import { AnyAction } from 'redux';
import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from './user.action';
import { UserData } from '../../utils/firebase/index';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// const oldUserReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//       return { ...state, currentUser: payload };

//     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//       return { ...state, currentUser: null };

//     case USER_ACTION_TYPES.SIGN_IN_FAILED:
//     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//     case USER_ACTION_TYPES.SIGN_UP_FAILED:
//       return { ...state, error: payload };
//     default:
//       return state;
//   }
// };

export const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload; // 这里看起来是对 state.currentUser进行赋值，
      // 实际上是生成了一个新的对象。Redux ToolKit时刻监控着 state 对象，
      // 如果 state 发生了变化，那么它不会改变它，而是生成一个新的 state 对象
    })
    .addCase(signOutSuccess, (state) => {
      state.currentUser = null;
    })
    .addCase(signInFailed, (state, action) => {
      state.error = action.payload;
    })
    .addCase(signOutFailed, (state, action) => {
      state.error = action.payload;
    })
    .addCase(signUpFailed, (state, action) => {
      state.error = action.payload;
    });
});
