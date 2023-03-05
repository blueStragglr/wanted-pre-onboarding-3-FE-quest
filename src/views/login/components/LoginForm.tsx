import styled from "styled-components";

function LoginForm() {
  return (
    <LoginFormWrap>
      <h1>로그인</h1>
      <div>
        <FormGroup>
          <label htmlFor="">아이디</label>
          <input type="text" placeholder="아이디를 입력해주세요" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">비밀번호</label>
          <input type="text" placeholder="비밀번호를 입력해주세요" />
        </FormGroup>

        <BtnLogin type="submit">로그인</BtnLogin>
      </div>
    </LoginFormWrap>
  );
}

const LoginFormWrap = styled.div`
  width: 60%;
  margin: 1rem auto 0;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    margin: 0.4rem 0;
  }
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
  }
`;

const BtnLogin = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.4rem;
  background: #2b2dbc;
  color: #fff;
`;
export default LoginForm;
