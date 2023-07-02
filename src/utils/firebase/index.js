import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo2b5EbJdI-kbqSymYWnhSAR_voEcUyDw',
  authDomain: 'geek-sale-db.firebaseapp.com',
  projectId: 'geek-sale-db',
  storageBucket: 'geek-sale-db.appspot.com',
  messagingSenderId: '940615875018',
  appId: '1:940615875018:web:251c6ae13dbf57a7f53733',
};

// 初始化 firebase app
const firebaseApp = initializeApp(firebaseConfig);

// 初始化 google 第三方登录
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// // 初始化 facebook 第三方登录
// const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// 初始化 firestore database
export const db = getFirestore();

// 在 firebase 数据库中创建一个document，在这里是创建一个新注册的用户
export const createUserDocumentFromAuth = async (userAuth, additionalUserInfo = {}) => {
  if (!userAuth) return;

  // 定义一个DocumentReference对象，它指向一个文档，你需要给doc传3个参数，第一个是数据库实例，第二个是collection名称，第三个是文档id
  // 有了文档参考对象，你可以对该文档进行读取、写入和其他操作
  // 创建一个 doc ，即创建这个 doc 的引用
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  // 通过getDoc()方法从userDocRef所指向的文档获取快照对象DocumentSnapshot对象，有了快照对象，你可以访问该文档的数据、元数据和其他信息
  // 创建这个 doc 的 snapshot
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // 如果不存在这个user，那么就创建它
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // 向刚刚创建的 doc 写入数据
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalUserInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// 接下来是 sign up with email 的流程
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

// 接下来是 sign in with email 的流程
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

// 定义注销方法
export const signOutUser = async () => await signOut(auth);

// 定义一个监听器，监听Auth的状态变化，将回调函数作为参数传进去
export const onAuthStateChangedListener = callback => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
