import { Directory } from '../../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
