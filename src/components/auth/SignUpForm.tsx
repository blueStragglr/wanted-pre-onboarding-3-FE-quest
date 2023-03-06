import { useForm } from 'react-hook-form';
import { SignUpRequestProps } from '../../apis/auth/auth.types';
import { Wrapper, Box, Input, WarnText, Button } from './styles';

function SignUpForm({ submitCallback }: { submitCallback: (props: SignUpRequestProps) => void }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpRequestProps>();

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
        <Input
          {...register('passwordConfirm', { required: true, minLength: 8 })}
          placeholder="Confirm password"
          type="password"
        />
        {errors.password && errors.password.type === 'required' ? (
          <WarnText>Enter your password!</WarnText>
        ) : getValues('password') !== getValues('passwordConfirm') ? (
          <WarnText>Check your confirm password!</WarnText>
        ) : (
          ''
        )}
        <Button>Sign In</Button>
      </Box>
    </Wrapper>
  );
}

export default SignUpForm;
