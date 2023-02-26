import React, { useState } from "react";
import './Login.css'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  const onSaveLoginState = () => {
    setIsRemember(!isRemember);
  }
  const handleIdChange = ({ target: {value}}) => setUserId(value);
  const handlePwdChange = ({ target: {value}}) => setUserPwd(value);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Id',userId);
    console.log('Pwd', userPwd);
    console.log('remember', isRemember);
  }

  return (
    <div className="login_container">
      <form className="login_box" onSubmit={handleSubmit}>
        <label htmlFor="user_id">
          아이디
        </label>
        <input 
          type="text"
          placeholder="아이디"
          name="user_id"
          value={userId}
          required
          autoComplete="off"
          onChange={handleIdChange}
          />
        <label htmlFor="user_pwd">
          비밀번호
        </label>
        <input 
          type="password"
          placeholder="비밀번호"
          name="user_pwd"
          value={userPwd}
          required
          autoComplete="off"
          onChange={handlePwdChange}
          />
        <div>
          <input 
            type="checkbox"
            checked={isRemember}
            name="remember"
            htmlFor="remeber"
            onChange={onSaveLoginState}
          />
          <label>로그인 상태 유지</label>
        </div>
        <button type="submit" className="login_btn"> 로그인 </button>
      </form>
    </div>
  )
}

export default Login;