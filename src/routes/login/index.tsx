import './login.css';

function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='form-container'>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input type='text' name='username' id='username' placeholder='아이디' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호'
        />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
}

export default Login;
