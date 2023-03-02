/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

function Login() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const handleSubmit = () => {
    console.log("id :", idValue);
    console.log("password :", pwValue);
    setIdValue("");
    setPwValue("");
  };

  return (
    <>
      <div css={titleCss}>로그인</div>
      <Wrapper>
        <form>
          <div css={TextInputWrapperCss}>
            <label htmlFor="id">아이디*</label>
            <input
              name="id"
              value={idValue}
              onChange={(e) => setIdValue(e.target.value)}
            />
          </div>
          <div css={TextInputWrapperCss}>
            <label htmlFor="password">비밀번호*</label>
            <input
              name="password"
              value={pwValue}
              onChange={(e) => setPwValue(e.target.value)}
            />
          </div>

          <div css={buttonWrapperCss}>
            <button css={buttonCss} type="button" onClick={handleSubmit}>
              로그인
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const titleCss = css`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  form {
    padding: 50px 0;
  }
`;

const TextInputWrapperCss = css`
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 1px solid;
  }
`;

const buttonWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonCss = css`
  padding: 10px 50px;
  background: #50a4ff;
  border-radius: 5px;
  margin-top: 50px;
`;

export default Login;
