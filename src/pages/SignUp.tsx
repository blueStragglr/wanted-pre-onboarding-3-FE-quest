import { SubmitHandler } from 'react-hook-form';
import { signUp } from '../apis/auth/auth';
import { SignUpRequestProps } from '../apis/auth/auth.types';
import SignUpForm from '../components/auth/SignUpForm';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignUpRequestProps> = (data) => {
    signUp(data);
    navigate('/signin');
  };

  return <SignUpForm submitCallback={onSubmit} />;
}

export default SignUp;
