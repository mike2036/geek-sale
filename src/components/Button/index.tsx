import { BaseButton, GoogleButton, InvertedButton } from './index.styles';
// ButtonHTMLAttributes代表 HTML按钮元素的属性
import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

// 定义了一个枚举
export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

// 先定义一个对象，有3个成员，每个成员的key是一个字符串，value是对应的button组件
// 接下来定义一个取值函数getButton，传入参数是buttonType，返回上面创建的对象里的相应的button组件
// 这段代码相当于创建了一个映射表，给出buttonType，即可得到相应的button组件
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// 这里定义了ButtonProps类型，它除了包含3个属性，还包含了从ButtonHTMLAttributes类型继承来的HTML按钮元素的属性
export type ButtonProps = {
  children: ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// 使用泛型FC来指定Button的属性类型
// <ButtonProps>表示Button组件接受ButtonProps类型的属性
export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  // 上面的参数通过解构赋值的方式从 props 中提取了 children 属性
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>; // children 表示 Button 组件的子元素
};

export default Button;
