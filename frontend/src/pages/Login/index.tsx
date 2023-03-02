import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, LoginBox, SubTitle, Title, Wrapper } from './style'

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onChangeId = (e:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget : {value}} = e
        setId(value)
    }
    const onChangePassword = (e:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget : {value}} = e
        setPassword(value)
    }

    const handleLogin = (e:React.FormEvent) => {
        e.preventDefault();
        alert('로그인 성공!');
        console.log(id, password);
        navigate('/')
    }
    

  return (
    <Wrapper>
        <LoginBox>
            <Title>Wanted Pre-onboaring course</Title>
            <SubTitle>Login</SubTitle>
            <Form onSubmit={handleLogin} >
                <input onChange={onChangeId}
                type="text" placeholder='username' value={id}/>
                <input onChange={onChangePassword}
                type="text" placeholder='password' value={password}/>
                <button>Login</button>
            </Form>
        </LoginBox>
    </Wrapper>
  )
}

export default Login