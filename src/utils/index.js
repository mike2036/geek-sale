import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from './firebase';

import { createAction } from './reducers';

export {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
  createAction,
};
