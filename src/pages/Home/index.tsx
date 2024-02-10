import { Directory } from '../../components';
// import { Outlet } from 'react-router-dom';
import { NavbarPlaceHolder } from '../../components/NavbarPlaceHolder';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <NavbarPlaceHolder />
      {/* <Outlet /> */}
      <Directory />
    </Fragment>
  );
};

export default Home;
