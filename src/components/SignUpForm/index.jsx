import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils';

import FormInput from '../FormInput';
import './index.scss';

import { Button } from '../../components';

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
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      // 通过 Firebase 的 Authentication 创建新用户
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      // console.log('user:', user);

      // 在 Firebase 的 Firestore Database 中创建新的 user document
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
      // console.log('userDocRef:', userDocRef);

      // // 将创建好的新用户，存到 Context
      // setCurrentUser(user);

      // 初始化 UI 界面的表单值，避免用户名密码泄露
      setFormFields(defaultFormFields);

      console.log('email and pwd logged in as: ', displayName);
    } catch (error) {
      console.log('error creating user with email and passwords:', error.message);
    }
  };

  return (
    <div className="sign-up-container">
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
    </div>
  );
};

export default SignUpForm;
