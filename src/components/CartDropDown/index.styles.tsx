import styled from 'styled-components';

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from '../Button/index.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // border: 1px solid black;
  border-radius: 2%;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const StyledCartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   // border: 1px solid black;
//   border-radius: 2%;
//   background-color: white;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }
