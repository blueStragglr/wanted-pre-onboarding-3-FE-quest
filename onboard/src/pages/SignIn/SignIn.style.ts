import styled from "styled-components";

export const SignInContianer = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #318ce7;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
`;

export const SignInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  button {
    border: none;
    background-color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: #318ce7;
    letter-spacing: -1px;
  }
`;

export const SignInBody = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  input {
    padding: 5px;
    margin-bottom: 10px;
    border: 2px solid #318ce7;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 2px solid #0039a6;
    }
  }
`;

export const SignInBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #6cb4ee;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #318ce7;
    }
  }
`;
