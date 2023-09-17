import { Outlet } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
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

import { FreeShipAd } from '../../components/FreeShipAd';
import { NavSearch } from '../../components/NavSearch';

const Navigation = () => {
  // 使用useSelector钩子来获取存储在store里的currentUser
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  // const { isCartOpen } = useContext(CartContext);

  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(signOutStart());
  };

  // 页面下滑超过100px则向上隐藏导航栏，页面上滑则显示导航栏
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavigationHidden, setIsNavigationHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setIsNavigationHidden(true);
      setPrevScrollPos(currentScrollPos);
    } else if (currentScrollPos < prevScrollPos) {
      setIsNavigationHidden(false);
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 这个return语句返回一个函数，这个函数叫做清理函数
      // 执行时机：清理函数会在2种情况下执行，1是组件被卸载时，2是下一次组件被重新渲染之前
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Fragment>
      <NavigationContainer isnavigationhidden={isNavigationHidden}>
        <LogoContainer to="/">
          <StyledLogo src={logo} />
        </LogoContainer>

        <FreeShipAd />

        <NavLinksContainer>
          <NavSearch />
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
