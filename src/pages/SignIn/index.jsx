import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils';
import { SignUpForm } from '../../components';

const SignIn = () => {
  // google popup 第三方登录逻辑
  const logGooglePopupUser = async () => {
    try {
      // 调用 firebase 的 google 三方登录，拿到用户信息
      const { user } = await signInWithGooglePopup();

      // 在 firebase database 创建 用户 document
      const userDocRef = await createUserDocumentFromAuth(user);
      // console.log(user);
      // console.log(userDocRef);
      console.log('popup logged in as: ', user.displayName);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const logGoogleRedirectUser = async () => {
  //   try {
  //     const { user } = await signInWithGoogleRedirect();
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //     // console.log(user);
  //     // console.log(userDocRef);
  //     console.log('redirect logged in as: ', user.displayName);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <div>Sign in page</div>
      <button onClick={logGooglePopupUser}>sign in with Google Popup</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
