import { useNavigate } from 'react-router-dom'

import authApi from '@/api/authApi'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import useForm from '@/hooks/useForm'
import { ROUTE } from '@/router/routerInfo'
import { loginValidate, LoginValidateProps } from '@/service/auth.validation'

const SignUp = () => {
  const navigate = useNavigate()

  const handleClickGoToLogin = () => {
    navigate(ROUTE.LOGIN)
  }

  const submitCallback = async ({ email, password }: LoginValidateProps) => {
    try {
      const response = await authApi.signUp(email, password)
      // FIXME: axios response typing
      const { message } = response.data as { message: string }
      alert(message)
      // TODO: 상태관리 및 로그인 서비스 함수로 리팩토링
      navigate(ROUTE.LOGIN)
    } catch (error) {
      alert(error)
    }
  }
  const { inputValues, validateError, onChangeHandler, submitHandler, satisfyAllValidates } = useForm({
    initialValues: { email: '', password: '' },
    submitCallback,
    validate: loginValidate,
  })
  return (
    <div className="mx-auto my-auto flex w-1/2 min-w-max flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md ">
      <h1 className="mb-4 text-3xl font-bold">Wanted Pre-onboarding course</h1>
      <h2 className="mb-4 text-3xl">Sign Up</h2>
      <form
        onSubmit={submitHandler}
        className="mx-auto my-auto mt-12 flex w-full flex-col items-center justify-center gap-4"
      >
        <TextInput
          label="Email address"
          id="email"
          placeholder="Email address *"
          value={inputValues.email}
          onChange={onChangeHandler}
          isError={!!validateError.email}
          errorMessage={validateError.email}
        />
        <TextInput
          label="Password"
          id="password"
          placeholder="Password *"
          value={inputValues.password}
          onChange={onChangeHandler}
          isError={!!validateError.password}
          errorMessage={validateError.password}
        />
        <Button text="SIGN UP" disabled={!satisfyAllValidates} />
        <Button text="LOGIN" onClick={handleClickGoToLogin} />
      </form>
    </div>
  )
}

export default SignUp
