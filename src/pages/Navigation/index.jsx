import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/pics/geek-sale-logo.png';
import './index.scss';
import { useContext } from 'react';
import { UserContext, CartContext } from '../../contexts';
import { signOutUser } from '../../utils';
import { CartIcon, CartDropDown } from '../../components';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

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
              <Link className="nav-link" onClick={signOutUser}>
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
