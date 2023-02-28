import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const onClickSubmit = () => {
    if (idRef.current?.value === '') {
      alert('ID를 입력하세요');
      return;
    }
    if (pwRef.current?.value === '') {
      alert('PASSWORD를 입력하세요');
      return;
    }

    sessionStorage.setItem('accessFlag', 'true');
    navigate('/');
  };

  return (
    <div className="container__login">
      <div className="wrap__login">
        <div className="login__title">
          <h1>WELCOME</h1>
        </div>
        <div className="wrap__auth">
          <p>ID</p>
          <input type="text" className="input__box" ref={idRef} />
        </div>
        <div className="wrap__auth">
          <p>PASSWORD</p>
          <input type="password" className="input__box" ref={pwRef} />
        </div>
        <button className="submit" onClick={onClickSubmit}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
