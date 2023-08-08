import styled from 'styled-components';

type BGImgProps = {
  imageUrl: string;
};

// 这里在右边的div的右侧写上了泛型参数，然后就能给属性声明类型
export const BGImg = styled.div<BGImgProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center; // 将子元素在主轴上居中对齐
  justify-content: center; // 将子元素在交叉轴上居中对齐
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute; // 绝对定位，即相对于其最近的具有定位属性的父元素进行定位

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%; // 设置容器的最小宽度为父容器宽度的百分比
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  //&表示父元素
  &:hover {
    cursor: pointer;

    & ${BGImg} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

// .directory-item-container {
//   min-width: 30%; // 设置容器的最小宽度为父容器宽度的百分比
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   // border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   // &表示父元素
//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .category-body-container {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .category-body-container {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center; // 将子元素在主轴上居中对齐
//     justify-content: center; // 将子元素在交叉轴上居中对齐
//     border: 1px solid black;
//     background-color: white;
//     opacity: 0.7;
//     position: absolute; // 绝对定位，即相对于其最近的具有定位属性的父元素进行定位

//     h2 {
//       font-weight: bold;
//       margin: 0 6px 0;
//       font-size: 22px;
//       color: #4a4a4a;
//     }

//     p {
//       font-weight: lighter;
//       font-size: 16px;
//     }
//   }
// }
