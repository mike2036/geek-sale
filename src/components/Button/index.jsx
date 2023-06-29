import './index.scss';

const Button = ({ children, buttonClass, ...otherProps }) => {
  // 上面的参数通过解构赋值的方式从 props 中提取了 children 属性
  return (
    <button className={`button-container ${buttonClass}`} {...otherProps}>
      {children}
    </button>
  ); // children 表示 Button 组件的子元素
};

export default Button;
