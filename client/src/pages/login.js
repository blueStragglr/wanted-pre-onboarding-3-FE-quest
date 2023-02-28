import { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 300px;
  height: 300px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background-color: #00c471;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
    :hover {
      background-color: rgb(0, 170, 96);
    }
    :active {
      background-color: #00c471;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  input {
    height: 50px;
    padding: 5px 10px;
    border-radius: 3px;
    :hover {
      outline: 1px solid #00c471;
    }
  }
`;

const LoginPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // const currentUsername = usernameRef.current.value;
    // const currentPassword = passwordRef.current.value;

    // const reqbody = {
    //   username: currentUsername,
    //   password: currentPassword,
    // };

    dispatch(loginActions.login(true));
  };

  return (
    <MainWrapper>
      <FormContainer>
        <h2>로그인</h2>
        <form onSubmit={onSubmitHandler}>
          <FormGroup>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              ref={usernameRef}
              placeholder="유저네임을 입력하세요."
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              placeholder="비밀번호를 입력하세요."
              required
            />
          </FormGroup>
          <button>로그인</button>
        </form>
      </FormContainer>
    </MainWrapper>
  );
};

export default LoginPage;
