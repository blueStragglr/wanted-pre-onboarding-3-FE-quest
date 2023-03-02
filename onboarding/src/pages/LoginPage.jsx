import { useState } from 'react';
import { login } from '../apis/login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="content-page">
      <form className="login-form">
        <label>
          <p>이메일</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          <p>비밀번호</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <button type="button" onClick={() => login({ email, password })}>
          로그인
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
