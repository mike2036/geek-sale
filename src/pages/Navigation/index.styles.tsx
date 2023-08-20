import styled from 'styled-components';
import { Link } from 'react-router-dom';

type NavigationContainerProps = {
  isnavigationhidden: boolean;
};

export const NavigationContainer = styled.div<NavigationContainerProps>`
  position: fixed;
  top: ${({ isnavigationhidden }) => (isnavigationhidden ? '-70px' : '0')};
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  z-index: 100;
  transition: top 0.2s;
`;

export const StyledLogo = styled.img`
  height: 100%;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
