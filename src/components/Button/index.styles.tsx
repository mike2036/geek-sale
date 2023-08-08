import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'FiraSansExtraCondensed-Light';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  // 其中 & 表示对当前组件本身的引用，用于指代当前选择器所匹配的元素。
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// .button - container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: 'FiraSansExtraCondensed-Light';
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;

//   // 其中 & 表示对当前组件本身的引用，用于指代当前选择器所匹配的元素。
//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

//   // &.google-sign-in 表示拥有 .button-container 类和 .google-sign-in 类
//   // 的元素的样式
//   &.google-sign-in {
//     background-color: #4285f4;
//     color: white;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: white;
//       border: none;
//     }
//   }
// }
