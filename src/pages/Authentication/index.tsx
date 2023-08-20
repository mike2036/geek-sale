import { SignUpForm, SignInForm } from '../../components';
import { AuthenticationContainer } from './index.styles';
import { NavbarPlaceHolder } from '../../components/NavbarPlaceHolder';
import { Fragment } from 'react';

const Authentication = () => {
  return (
    <Fragment>
      <NavbarPlaceHolder />
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  );
};

export default Authentication;
