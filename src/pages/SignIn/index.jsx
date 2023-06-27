import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log(user);
      console.log(userDocRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>Sign in page</div>
      <button onClick={logGoogleUser}>
        click to sign in with Google Popup
      </button>
    </>
  );
};

export default SignIn;
