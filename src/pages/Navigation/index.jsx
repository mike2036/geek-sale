import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../assets/pics/geek-sale-logo.png';
import './index.scss';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts';
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
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <div>
              <span>{currentUser.displayName}</span>
              <Link className="nav-link" onClick={signOut}>
                Sign Out
              </Link>
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>
        {/* 当 isCartOpen 为真时，会继续求值并渲染 <CartDropDown /> 组件；当 isCartOpen 为假时，会停止求值并返回 false。 */}
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
