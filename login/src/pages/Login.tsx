import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";

const Login = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState({ id: "", pw: "" });

  const handleMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember((prev) => ({ ...prev, [`${e.target.id}`]: e.target.value }));
  };

  const debounceHandleMember = useDebounce(handleMember, 200);

  const handleSubmit = () => {
    // 멤버 확인
    sessionStorage.setItem("isLogin", member.id);
    navigate("/");
  };

  return (
    <PageWrap>
      <LoginBox>
        <Title>LOGIN</Title>
        <InputWrap>
          <Label htmlFor="id">
            <Id>ID :</Id>
            <Input
              id="id"
              type="text"
              minLength={6}
              maxLength={12}
              placeholder="아이디를 입력해주세요."
              onChange={debounceHandleMember}
            />
          </Label>
          <Label htmlFor="pw">
            <Pw>PW :</Pw>
            <Input
              id="pw"
              type="password"
              minLength={6}
              maxLength={16}
              placeholder="비밀번호를 입력해주세요."
              onChange={debounceHandleMember}
            />
          </Label>
        </InputWrap>
        <SubmitBtn
          onClick={handleSubmit}
          disabled={
            member.id.length < 6 ||
            12 < member.id.length ||
            member.pw.length < 6 ||
            16 < member.pw.length
          }
        >
          로그인하기
        </SubmitBtn>
      </LoginBox>
    </PageWrap>
  );
};

const PageWrap = styled.section`
  ${({ theme }) => theme.mixin.Flex()}
  height: 100vh;
`;

const LoginBox = styled.article`
  border: 1px solid ${({ theme }) => theme.color.border};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 30px 0 24px;
  color: ${({ theme }) => theme.color.point_blue};
`;

const InputWrap = styled.div`
  padding: 0 70px 50px;
  ${({ theme }) =>
    theme.mixin.Flex("column", "space-between", "space-between", "12px")}
`;

const Label = styled.label`
  ${({ theme }) => theme.mixin.Flex("row", "space-between", "center")}

  :focus-within {
    color: ${({ theme }) => theme.color.point_blue};
  }
`;

const Name = styled.div`
  white-space: nowrap;
  margin-right: 12px;
`;

const Id = styled(Name)``;

const Pw = styled(Name)``;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #000;
  ::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }

  :focus {
    border-color: ${({ theme }) => theme.color.point_blue};
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  color: #fff;
  background-color: ${({ theme }) => theme.color.point_blue};
  :disabled {
    color: ${({ theme }) => theme.color.disabled};
    background-color: ${({ theme }) => theme.color.border};
  }
`;

export default Login;
