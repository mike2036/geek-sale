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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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

// 获取一个 firestore 实例，赋值给 db
export const db = getFirestore();

// 模块：从根目录的 shop-data.js 文件获取商品信息，写到 firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey); // 获取 db 数据库中的一个集合的引用
  const batch = writeBatch(db); // 创建一个数据库 db 的批处理对象

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done adding collection');
};

// 逻辑模块：从 firestore 中获取商品信息。完整注释如下：
/*
这段代码是一个逻辑模块，用于从 Firestore 数据库中获取商品信息。
函数 getCategoriesAndDocuments 是一个异步函数，它没有接受任何参数。
在函数内部，它执行以下操作：
使用 collection 方法从 Firestore 实例和指定集合名称（'categories'）创建一个集合引用（collectionRef）。
使用 query 方法从集合引用创建一个查询对象（q）。
使用 getDocs 方法执行查询并获取查询快照（querySnapshot）。
使用 reduce 方法遍历查询快照的文档，并将文档的数据转换为一个对象。
对于每个文档快照，提取其数据中的 title 和 items 字段。
将 title 转换为小写，并将其作为键，将 items 作为值添加到累加器对象中。
最后返回累加器对象。
请注意，该函数没有返回值，它只是在内部创建了一个包含商品信息的对象 categoryMap。如果希望在函数调用后使用或进一步处理 categoryMap，需要在函数中添加 return 语句将其返回。
该逻辑模块假设已经在代码中导入了所需的 Firestore 相关模块，并使用了合适的配置和初始化。它适用于从 Firestore 数据库的指定集合中获取商品信息，并将其转换为以分类标题（转换为小写）作为键的对象。
 */
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
  return categoryMap;
};

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
export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
