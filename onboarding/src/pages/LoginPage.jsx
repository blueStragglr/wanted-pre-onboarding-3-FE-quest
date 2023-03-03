import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apis/login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          login({ email, password }, () => navigate('/'));
        }}
      >
        <label>
          <p>이메일</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          <p>비밀번호</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <button>로그인</button>
      </form>
    </div>
  );
};
export default LoginPage;
