import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <PageWrap>
      <LoginBox>
        <Id>
          <Label>ID : </Label>
          <Input type="text" />
        </Id>
        <Pw>
          <Label>PW : </Label>
          <Input type="password" />
        </Pw>
      </LoginBox>
    </PageWrap>
  );
};

const PageWrap = styled.section``;

const LoginBox = styled.article``;

const LoginInputWrap = styled.div``;

const Id = styled(LoginInputWrap)``;

const Pw = styled(LoginInputWrap)``;

const Label = styled.label``;

const Input = styled.input``;

export default Login;
