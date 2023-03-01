import React, { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const FormContainer = styled.div`
  width: 400px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Input = styled.input``;
const Button = styled.button``;

const Login = () => {
  // const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const onSubmit = () => {
    console.log('onSubmit')
    localStorage.setItem('isLogin', true);
    setLogin(true);
    redirect('/');
  };

  useEffect(()=>{
    if(login) {
      console.log('login process ',localStorage.getItem('isLogin'))
      window.location.reload();
    }
  },[login]);

  return (
    <Container>
      <FormContainer>
        <div>
          <Input type='text' defaultValue='onboarding' />
          <Input type='password' defaultValue='onboarding' />
          <Button type='button' onClick={()=>onSubmit()}>LOGIN</Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Login;