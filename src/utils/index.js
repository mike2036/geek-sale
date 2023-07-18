import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesArray,
  getCurrentUser,
} from './firebase';

import { createAction } from './reducers';

/**------------------------------ */

export {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesArray,
  createAction,
  getCurrentUser,
};
