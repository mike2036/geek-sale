import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/pics/search-icon.svg';
// import { RefObject, FC } from 'react';

// 下面是候选词卡片部分

type SearchBarProps = {
  isSearchBarMouseHover: boolean;
};

export const SearchBar = styled.div<SearchBarProps>`
  width: 200px;
  height: 35px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: relative;
  background-color: ${({ isSearchBarMouseHover }) =>
    isSearchBarMouseHover ? '#f0f0f0' : ''};
  border: 1px solid rgb(138, 138, 138);
  border-radius: 50px;

  input {
    position: absolute; // 其定位基点不能是static定位，否则定位就会变成html元素
    top: 2px;
    left: 12px;
    height: 30px;
    background-color: rgba(200, 200, 200, 0.1);
    background-color: ${({ isSearchBarMouseHover }) =>
      isSearchBarMouseHover ? '#f0f0f0' : ''};
    border: none;
    outline: none;

    /* width: 100%; */
  }

  /* ul {
    position: absolute;
    top: 10px;
    right: 0;
  } */
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.5); */

  width: 20px;
  height: 20px;
  right: 10px;
  top: 2px;
  height: 30px;
`;

// type StyledCardProps = {
//   ref: RefObject<HTMLDivElement | null>;
// };

export const StyledCard = styled.div`
  position: absolute;
  top: 42px;
  left: -100px;

  width: 500px;
  /* height: 300px; */

  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0 1px;

  z-index: 101;

  display: flex;
  flex-direction: column;
`;

export const StyledTriangle = styled.div`
  position: absolute;
  top: 42px;
  left: 100px;

  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid rgba(238, 238, 238);
`;

export const StyledHistory = styled.div`
  flex-grow: 1;
  margin: 20px;
  /* border: 1px dotted; */

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-wrap: wrap;

    span {
      margin: 0 0 10px 10px;
      padding: 8px;
      background-color: rgb(245, 245, 245);
      /* border: 1px solid; */
      border-radius: 20px;
      cursor: pointer;
    }
    span:hover {
      background-color: rgb(236, 236, 236);
    }
  }
`;

export const StyledPopular = styled.div`
  flex-grow: 1;
  margin: 20px;

  /* border: 1px dotted; */

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-wrap: wrap;
    span {
      margin: 0 0 10px 10px;
      padding: 8px;
      background-color: rgb(245, 245, 245);
      /* border: 1px solid; */
      border-radius: 20px;
      cursor: pointer;
    }
    span:hover {
      background-color: rgb(236, 236, 236);
    }
  }
`;
