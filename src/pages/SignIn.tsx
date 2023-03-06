import { SubmitHandler } from 'react-hook-form';
import { signIn } from '../apis/auth/auth';
import { SignInRequestProps } from '../apis/auth/auth.types';
import SignInForm from '../components/auth/SignInForm';

function SignIn() {
  const onSubmit: SubmitHandler<SignInRequestProps> = (data) => {
    console.log(signIn(data));
  };

  return <SignInForm submitCallback={onSubmit}></SignInForm>;
}

export default SignIn;
