import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../util/state/atom';
import { IUser, users } from '../../util/users/users';
import { Form, LoginBox, SubTitle, Title, Wrapper } from './style'

const Login = () => {
    const setLoggedIn = useSetRecoilState(loginState);
    const navigate = useNavigate();

    const checkValidUser = async (username:string, password:string) : Promise<string> => {
        const user : IUser | undefined = users.find((user) => user.username === username && user.password === password)

        return user 
        ? user.userInfo.username
        : ''
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginResult = checkValidUser(formData.get('username') as string, formData.get('password') as string);

        if (!loginResult) {
            alert('로그인 정보가 일치하지 않습니다');
            return 
        }else{
            loginResult
            .then((username) => setLoggedIn({isLoggedIn : true, username}));
            navigate('/');
            // ! promise 객체에 담긴 string 과 일반 string 타입은 다르다.
            // setLoggedIn({isLoggedIn : true, username : loginResult.}) 
            // navigate('/')
        }
    }

    const handleGoHome = () => navigate('/')
    
  return (
    <Wrapper>
        <LoginBox>
            <Title>Wanted Pre-onboaring course</Title>
            <SubTitle>Login</SubTitle>
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