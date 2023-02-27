import {
  ILoginProps,
  LOGININPUT_TYPE,
  ThemeLoginButton,
  ThemeLoginForm,
} from "../../types/login";
import styled from "@emotion/styled";
import {
  colorBasicBlack,
  colorBlue,
  colorCancel,
  colorLightGray,
  colorSkyblue,
  colorWarning,
  colorWhite,
} from "../../../../common/styles/commonColor";
import LoginInput from "../LoginInput";
import { flexCenter } from "../../../../common/styles/commonLayout";

const LoginContainer = styled.div`
  ${flexCenter}
  height: 100vh;
  background-color: ${colorSkyblue};
`;

const LoginForm = styled.form<ThemeLoginForm>`
  position: relative;
  background-color: ${colorWhite};
  border: 2px solid ${colorLightGray};
  border-radius: 8px;
  padding: 150px 30px 80px;
  width: 80%;
  overflow: hidden;

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;

    background-color: ${colorLightGray};
    color: ${colorWhite};
    ${flexCenter}
  }

  h1 {
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-size: 18px;
    letter-spacing: 20px;
    font-weight: 700;
  }

  .feedback__id,
  .feedback__password {
    margin: 20px 0 50px;
    font-size: 12px;
    color: ${colorWarning};
    line-height: 1.6;
  }
  .feedback__id {
    ${(props) =>
      props.isIdInputFeedback ? "visibility: visible;" : "visibility: hidden;"}
  }

  .feedback__password {
    ${(props) =>
      props.isPasswordInputFeedback
        ? "visibility: visible;"
        : "visibility: hidden;"}
  }
`;

const LoginButtonWrap = styled.div<ThemeLoginButton>`
  text-align: center;
  button {
    padding: 10px 42px;
    border-radius: 5px;
    color: ${(props) =>
      props.isLoginButtonDisabled ? colorBasicBlack : colorWhite};
    background-color: ${(props) =>
      props.isLoginButtonDisabled ? colorCancel : colorBlue};
    cursor: ${(props) =>
      props.isLoginButtonDisabled ? "not-allowed" : "pointer"};
  }
`;

const LoginLayoutView = ({
  isLoginButtonDisabled,
  idInputValue,
  passwordInputValue,
  isIdInputFeedback,
  isPasswordInputFeedback,
  onChangeIdInputValue,
  onChangePasswordInputValue,
  onBlurIdInput,
  onBlurPasswordInput,
  onSubmitLoginForm,
}: ILoginProps) => {
  return (
    <LoginContainer>
      <LoginForm
        onSubmit={onSubmitLoginForm}
        isIdInputFeedback={isIdInputFeedback}
        isPasswordInputFeedback={isPasswordInputFeedback}
      >
        <header>
          <h1>로그인</h1>
        </header>

        <LoginInput
          minLength={8}
          type={LOGININPUT_TYPE.ID}
          isInputFeedback={isIdInputFeedback}
          value={idInputValue}
          onChange={onChangeIdInputValue}
          onBlur={onBlurIdInput}
        />
        <p className="feedback__id">아이디는 최소 8자리를 입력해주세요.</p>

        <LoginInput
          minLength={8}
          type={LOGININPUT_TYPE.PASSWORD}
          isInputFeedback={isPasswordInputFeedback}
          value={passwordInputValue}
          onChange={onChangePasswordInputValue}
          onBlur={onBlurPasswordInput}
        />
        <p className="feedback__password">
          비밀번호는 8~20자리, #?!@$%^&*- 중 하나의 특수문자를 포함해야 합니다.
        </p>

        <LoginButtonWrap isLoginButtonDisabled={isLoginButtonDisabled}>
          <button type="submit" disabled={isLoginButtonDisabled}>
            로그인
          </button>
        </LoginButtonWrap>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginLayoutView;
