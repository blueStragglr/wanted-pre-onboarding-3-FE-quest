import { useNavigate } from "react-router-dom";
import {
  SignInContianer,
  SignInHeader,
  SignInBody,
  SignInBtnWrapper
} from "./SignIn.style";

function SignIn() {
  const navigate = useNavigate();
  return (
    <SignInContianer>
      <SignInHeader>
        <p>로그인 페이지</p>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </SignInHeader>
      <SignInBody>
        <p>유저이름 입력</p>
        <input type="text" placeholder="username" />
        <p>비밀번호 입력</p>
        <input type="password" placeholder="password" />
      </SignInBody>
      <SignInBtnWrapper>
        <button>로그인</button>
      </SignInBtnWrapper>
    </SignInContianer>
  );
}

export default SignIn;
