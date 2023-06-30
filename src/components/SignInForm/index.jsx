import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils';

import FormInput from '../FormInput';
import './index.scss';

import { Button } from '..';

// 定义表单四个字段的初始值，你可以放到一个对象里面
const defaultFormFields = {
  email: '',
  password: '',
};

const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log('popup logged in as: ', user.displayName);
  } catch (error) {
    console.log(error.message);
  }
};

// 登录
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // 定义 handleChange
  const handleChange = event => {
    const name = event.target.name; // 通过 event.target.name 读取当前正在输入哪个 input
    // console.log(name);
    setFormFields({
      ...formFields,
      [name]: event.target.value, // 使用中括号语法，来动态更新对象的key的值
    });
  };

  // 定义 handelSubmit
  const handleSubmit = async event => {
    event.preventDefault();
    // 校验两次密码是否一致;

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('wrong password');
          break;
        case 'auth/user-not-found':
          alert('user not found, please check your email or sign up');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonClass="google-sign-in">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
