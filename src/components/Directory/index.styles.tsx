import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%; // 百分比的width相对的是父元素的内容区 content area
  display: flex; // 采用flex布局的元素称为flex容器，它的子元素自动称为容器的成员
  flex-wrap: wrap; // 设置items是否自动换行(默认值是no-wrap)
  justify-content: space-between; // 定义了项目在主轴上的对齐方式
`;

// .categories-container {
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }
