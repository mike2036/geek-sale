import { Group, FormInputLabel, Input } from './index.styles';
// FC是一个函数组件的类型，InputHTMLAttributes表示输入元素的HTML属性的类型
// 所以下面导入的这俩其实都是类型声明
import { FC, InputHTMLAttributes } from 'react';

// 这里定义了一个类型FormInputProps，它包含一个label属性，并继承了 & 右侧的类型
// 这样，FormInputProps类型就拥有了输入元素的所有属性
export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && ( // 如果label存在，则渲染这个label
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
