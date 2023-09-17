import { FC } from 'react';
import styled from 'styled-components';

// export const GreyBackgroundWrapper = styled.div`
//   position: static;
// `;

type TranslucentBackgroundProps = {
  top: string;
  left: string;
};

export const TranslucentBackground: FC<TranslucentBackgroundProps> = styled.div`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
