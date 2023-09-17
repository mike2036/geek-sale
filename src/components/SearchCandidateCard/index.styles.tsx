import styled from 'styled-components';

export const StyledCard = styled.div`
  position: absolute;
  top: 52px;
  left: -100px;

  width: 500px;
  height: 300px;

  background-color: rgb(255, 255, 255);
  border-radius: 5px;

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
`;
