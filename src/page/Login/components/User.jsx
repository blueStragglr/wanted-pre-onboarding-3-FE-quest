import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../../components/Utilities/Input';
import Button from '../../../components/Utilities/Button';

const User = ({ data, toggleIsLogin }) => {
  const { title, text, url } = data;

  const navigate = useNavigate();
  const [LoginValues, setLoginValues] = useState({
    email: '',
    password: '',
    username: '',
  });

  const { email, password, username } = LoginValues;
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const isValidEmail = emailRegex.test(email);
  const isVaildPassword = passwordRegex.test(password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...LoginValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && isVaildPassword) {
      alert('로그인에 성공하셨습니다');
      localStorage.setItem('email', JSON.stringify(LoginValues));
      navigate('/');
    } else {
      alert('로그인에 실패하셨습니다. 이메일 정규식을 다시 확인해주세요');
    }
  };

  return (
    <LoginContainer>
      <LoginModalContainer>
        <LoginLayout>
          <h1>{title}</h1>
          <form onSubmit={handleSubmit}>
            {title === '회원가입' && (
              <Input
                type="text"
                name="username"
                placeholder="이름"
                textAlign="center"
                margin="0 0 1rem 0"
                bgColor="#eee"
                onChange={handleChange}
              />
            )}
            <Input
              type="email"
              name="email"
              placeholder="아이디를 입력해주세요"
              textAlign="center"
              margin="0 0 1rem 0"
              bgColor="#eee"
              onChange={handleChange}
            />
            {email.length === 0 || isValidEmail || (
              <VaildInfoText>이메일 형식이 아닙니다.</VaildInfoText>
            )}
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              textAlign="center"
              margin="0 0 1rem 0"
              bgColor="#eee"
              onChange={handleChange}
            />
            {password.length === 0 || isVaildPassword || (
              <VaildInfoText>
                비밀번호는 8자 이상, 영문자,숫자,특수문자 포함입니다.
              </VaildInfoText>
            )}
            <Button margin="0 0 1rem 0">{title}</Button>
          </form>
          <hr />
          <ChangeLayout>
            <StyledLink to={`${url}`}>
              <p onClick={toggleIsLogin}>
                {title === '로그인' ? (
                  <>
                    <span style={{ marginRight: '15px' }}>
                      계정이 없으신가요
                    </span>
                    <span style={{ color: 'red' }}>{text}</span>
                  </>
                ) : (
                  <>
                    <span style={{ marginRight: '15px' }}>
                      이미 가입 하셨나요
                    </span>
                    <span style={{ color: 'red' }}>{text}</span>
                  </>
                )}
              </p>
            </StyledLink>
          </ChangeLayout>
        </LoginLayout>
      </LoginModalContainer>
    </LoginContainer>
  );
};

export default User;

const VaildInfoText = styled.div`
  margin-bottom: 1rem;

  color: red;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ChangeLayout = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 80%;
  height: 90%;

  font-size: 3rem;
  font-weight: bold;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-bottom: 3rem;
  }

  hr {
    width: 485px;
    height: 1px;
    border: 1px solid;
    color: #eee;
  }
`;

const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 65%;

  padding: 2rem;

  background-color: white;

  border: 1px solid white;
  border-radius: 2rem;

  z-index: 1;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100vw;
  height: 100vh;

  font-size: 1.25rem;

  background-image: url('https://static.wanted.co.kr/images/events/2729/b900264f.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  z-index: 0;
`;
