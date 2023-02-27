import styled from 'styled-components';

export default function Login() {
  return (
    <Form>
      <Input type="text" placeholder="ID" />
      <Input type="password" placeholder="PASSWORD" />
      <SubmitBtn>LOGIN</SubmitBtn>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  height: 100vh;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px 20px;
  border: 1px solid #ececec;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background: #3366ff;
`;
