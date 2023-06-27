import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// 初始化 firestore database
export const db = getFirestore();

// 在数据库中创建一个document，在这里是创建一个新注册的用户
export const createUserDocumentFromAuth = async userAuth => {
  // 定义一个DocumentReference对象，它指向一个文档，你需要给doc传3个参数，第一个是数据库实例，第二个是collection名称，第三个是文档id
  // 有了文档参考对象，你可以对该文档进行读取、写入和其他操作
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  // 通过getDoc()方法从userDocRef所指向的文档获取快照对象DocumentSnapshot对象，有了快照对象，你可以访问该文档的数据、元数据和其他信息
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // 如果不存在这个user，那么就创建它
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
