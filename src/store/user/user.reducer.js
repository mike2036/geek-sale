import { USER_ACTION_TYPES } from './user.types';
import { createReducer } from '@reduxjs/toolkit';
import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from '../user/user.action';

const INITIAL_STATE = {
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

const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(signOutSuccess, (state, action) => {
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

export { userReducer };
