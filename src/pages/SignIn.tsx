import { SubmitHandler } from 'react-hook-form';
import { signIn } from '../apis/auth/auth';
import { SignInRequestProps } from '../apis/auth/auth.types';
import SignInForm from '../components/auth/SignInForm';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignInRequestProps> = (data) => {
    signIn(data);
    navigate('/');
  };

  return <SignInForm submitCallback={onSubmit}></SignInForm>;
}

export default SignIn;
