import useForm from '@/hooks/useForm'
import { loginValidate, LoginValidateProps } from '@/service/auth.service'

const Login = () => {
  const submitCallback = async ({ email, password }: LoginValidateProps) => {
    await new Promise(res => setTimeout(res, 1000))
    alert(email)
  }
  const { inputValues, validateError, onChangeHandler, submitHandler, satisfyAllValidates } = useForm({
    initialValues: { email: '', password: '' },
    submitCallback,
    validate: loginValidate,
  })
  return (
    <div className="w-50 mx-auto my-auto">
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-4">
        <div className="flex w-6/12 flex-col items-start justify-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={inputValues.email}
            placeholder="Email"
            onChange={onChangeHandler}
            autoComplete="off"
          />
          {validateError.email && <span className="text-red-500">{validateError.email}</span>}
        </div>
        <div className="flex w-6/12 flex-col items-start justify-center">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={inputValues.password}
            placeholder="password"
            onChange={onChangeHandler}
            autoComplete="off"
          />
          {validateError.password && <span className="text-red-500">{validateError.password}</span>}
        </div>
        <button
          className="h-10 w-32 rounded-md bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
          disabled={!satisfyAllValidates}
        >
          제출
        </button>
      </form>
    </div>
  )
}

export default Login
