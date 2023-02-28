import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <nav id="login">
      <h1 id="login-title">로그인</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-item">
          <label htmlFor="login-id">아이디</label>
          <input
            id="login-id"
            type="text"
            placeholder="아이디를 입력 해 주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="login-item">
          <label htmlFor="login-password">비밀번호</label>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력 해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">
          제출
        </button>
      </form>
    </nav>
  );
}
