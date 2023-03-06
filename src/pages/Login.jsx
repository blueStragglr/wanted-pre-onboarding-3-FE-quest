import StyleApp from '../App.module.css';

const Login = () => {
  return (
    <article className={StyleApp.login}>
      <h2 className={StyleApp.loginTitle}>로그인 해주세요.</h2>
      <form>
        <fieldset>
          <legend className={StyleApp.ir}>로그인</legend>
          <label htmlFor='username'>사용자 이름</label>
          <input id='username' type='text' required />
        </fieldset>
        <fieldset>
          <legend className={StyleApp.ir}>로그인</legend>
          <label htmlFor='password'>비밀번호</label>
          <input id='password' type='password' required />
        </fieldset>
      </form>
    </article>
  );
};

export default Login;
