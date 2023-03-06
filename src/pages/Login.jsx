import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyleApp from '../App.module.css';

const Login = ({ onLogin }) => {
  const inputRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      onLogin();
      navigate('/a');
    }
  };

  const handleChange = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <article className={StyleApp.login}>
      <h2 className={StyleApp.loginTitle}>로그인 해주세요.</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className={StyleApp.ir}>로그인 - 사용자 이름</legend>
          <label htmlFor='username'>사용자 이름</label>
          <input
            id='username'
            type='text'
            required
            ref={inputRef}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <legend className={StyleApp.ir}>로그인 - 비밀번호</legend>
          <label htmlFor='password'>비밀번호</label>
          <input
            id='password'
            type='password'
            required
            onChange={handleChange}
          />
        </fieldset>
        <button>로그인</button>
      </form>
    </article>
  );
};

export default Login;
