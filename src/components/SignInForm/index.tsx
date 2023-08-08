import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../FormInput';
import { SignUpContainer, ButtonsContainer } from './index.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/index';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';

// 定义表单四个字段的初始值，你可以放到一个对象里面
const defaultFormFields = {
  email: '',
  password: '',
};

// 登录
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  // const signInWithGoogle = async () => {
  //   try {
  //     const { user } = await signInWithGooglePopup();
  //     // setCurrentUser(user);
  //     console.log('google logged in as: ', user.displayName);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  // 定义 handleChange
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const name = event.target.name; // 通过 event.target.name 读取当前正在输入哪个 input
    const { name, value } = event.target; // 通过 event.target.name 读取当前正在输入哪个 input
    // console.log(name);
    setFormFields({
      ...formFields,
      [name]: value, // 使用中括号语法，来动态更新对象的key的值
    });
  };

  // 定义登录的 handelSubmit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart({ email, password }));
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sin in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
