import { SignUpForm, SignInForm } from '../../components';
import { AuthenticationContainer } from './index.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
