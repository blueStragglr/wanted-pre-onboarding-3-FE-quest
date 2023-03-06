import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 200px;
`;

export const Input = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  padding-inline: 10px;
  margin-bottom: 10px;
  border: 1px solid;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  background-color: #2c3e50;
  color: white;
  border-radius: 5px;
  :hover {
    background-color: #34495e;
  }
`;

export const WarnText = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 12px;
  word-break: break-all;
`;

export function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
    ></ToastContainer>
  );
}
