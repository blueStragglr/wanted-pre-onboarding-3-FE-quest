import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ILoginState, setUserToLocal } from '../../context/LoginContext';
import { useLoginContext } from '../../hooks/useLoginContext';
import { ILoginPayload, TLoginResult } from '../../util/types/login';
import { TgetUser } from '../../util/types/user';
import { Form, LoginBox, SubTitle, Title, Wrapper } from './style'

interface ILoginComponent{
    label:string;
    loginFn : (args:ILoginPayload) => Promise<TLoginResult>  
    getUserFn : (access_token ?: string)  => Promise<TgetUser>
}

const Login : React.FC<ILoginComponent> = ({label, loginFn, getUserFn}) => {
    const {dispatch} : ILoginState = useLoginContext()
    
    const navigate = useNavigate(); 
    const handleGoHome = () => navigate('/')
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const loginPayload : ILoginPayload = {
            username : formData.get('username') as string,
            password : formData.get('password') as string
        }

        const loginResult: TLoginResult = await loginFn(loginPayload)
        if(loginResult.result === 'fail') return
        const name: TgetUser = await getUserFn(loginResult.access_token)
        if(!name) return

        dispatch({type:'LOGIN', name})
        setUserToLocal({isLoggedIn:true, name})
        alert('로그인 성공!')
        handleGoHome()
    }  

  return (
    <Wrapper>
        <LoginBox>
            <Title>Wanted Pre-onboaring course</Title>
            <SubTitle>Login {`${label}`}</SubTitle>
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' name='username' />
                <input type="password" placeholder='password' name='password'/>
                <button type='submit'>Login</button>
            </Form>

            <button onClick={handleGoHome}>go home</button>
        </LoginBox>
    </Wrapper>
  )
}

export default Login