import { useForm } from 'react-hook-form';
import { SignInRequestProps } from '../../apis/auth/auth.types';
import { Wrapper, Box, Input, WarnText, Button } from './styles';

function SignInForm({ submitCallback }: { submitCallback: (props: SignInRequestProps) => void }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInRequestProps>();

  return (
    <Wrapper>
      <Box onSubmit={handleSubmit(submitCallback)}>
        <Input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          type="email"
        />
        {errors.email && errors.email.type === 'required' ? (
          <WarnText>Enter your email address!</WarnText>
        ) : errors.email && errors.email.type === 'pattern' ? (
          <WarnText>Enter valid email address!</WarnText>
        ) : (
          ''
        )}
        <Input
          {...register('password', { required: true, minLength: 8 })}
          placeholder="Password"
          type="password"
        />

        {errors.password && errors.password.type === 'required' ? (
          <WarnText>Enter your password!</WarnText>
        ) : errors.password && errors.password.type === 'minLength' ? (
          <WarnText>Enter at least 8 characters!</WarnText>
        ) : (
          ''
        )}
        <Button>Sign In</Button>
      </Box>
    </Wrapper>
  );
}

export default SignInForm;
