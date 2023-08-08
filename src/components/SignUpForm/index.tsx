import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../FormInput';
import { SignUpContainer } from './index.styles';
import { Button } from '../Button/index';
import { signUpStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

// 定义表单四个字段的初始值，你可以放到一个对象里面
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// 注册
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // 定义 handleChange

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name; // 通过 event.target.name 读取当前正在输入哪个 input
    // console.log(name);
    setFormFields({
      ...formFields,
      [name]: event.target.value, // 使用中括号语法，来动态更新对象的key的值
    });
  };

  // 定义 handelSubmit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 提交前本地校验两次密码是否一致;
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // 提交注册请求
    try {
      dispatch(signUpStart({ email, password, displayName }));

      // 初始化 UI 界面的表单值，避免用户名密码泄露
      setFormFields(defaultFormFields);

      console.log('email and pwd logged in as: ', displayName);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sin up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName" // 给 input 元素添加 name 属性，这个属性可以在 event.target.name 读取
        />
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
        <FormInput
          label="ConfirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
