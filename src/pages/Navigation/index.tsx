import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import {
  NavigationContainer,
  StyledLogo,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './index.styles';
import logo from '../../assets/pics/geek-sale-logo.png';

import { CartIcon, CartDropDown } from '../../components';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  // 使用useSelector钩子来获取存储在store里的currentUser
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  // const { isCartOpen } = useContext(CartContext);

  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <StyledLogo src={logo} />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <Fragment>
              <span>{currentUser.displayName}</span>
              <NavLink to="" onClick={signOut}>
                Sign Out
              </NavLink>
            </Fragment>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
