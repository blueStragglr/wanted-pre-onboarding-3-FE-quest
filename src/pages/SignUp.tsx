import { SubmitHandler } from 'react-hook-form';
import { signUp } from '../apis/auth/auth';
import { SignUpRequestProps } from '../apis/auth/auth.types';
import SignUpForm from '../components/auth/SignUpForm';

function SignUp() {
  const onSubmit: SubmitHandler<SignUpRequestProps> = (data) => {
    console.log(signUp(data));
  };

  return <SignUpForm submitCallback={onSubmit}></SignUpForm>;
}

export default SignUp;
