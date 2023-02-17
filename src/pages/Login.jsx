import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  return (
    <Section>
      <Img src="https://static.wanted.co.kr/favicon/180x180.png" alt="로고 이미지" />
      <Header>로그인</Header>
      <Form>
        <Input placeholder="아이디를 입력해 주세요." />
        <Input type="password" placeholder="비밀번호를 입력해 주세요." />
      </Form>
      <LoginButton>이메일로 로그인</LoginButton>
      <SignupButton>회원가입</SignupButton>
    </Section>
  );
}
const Section = styled.section`
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem auto;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;
const Header = styled.h2`
  color: rgb(51, 102, 255);
  font-size: 2rem;
`;
const Img = styled.img`
  width: 10rem;
  height: 8rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 4rem;
`;
const Input = styled.input`
  width: 20rem;
  height: 3rem;
`;

const LoginButton = styled.button`
  width: 19rem;
  height: 3.2rem;
  font-size: 1rem;
  background-color: rgb(51, 102, 255);
  color: #fff;
  border: none;
  border-radius: 50px;
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const SignupButton = styled(Link)`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export default Login;
