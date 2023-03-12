import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ILoginState } from '../../context/LoginContext'
import { useLoginContext } from '../../hooks/useLoginContext'
import SideBar from '../SideBar'
import { Container, Wrapper } from './style'

interface IAuthLogin{
    element:React.ReactNode
}

const AuthLogin:React.FC<IAuthLogin> = ({element}) => {
    const navigate = useNavigate();
    const {state : {isLoggedIn}} : ILoginState = useLoginContext()

    useEffect(() => {
        if(!isLoggedIn){
            alert('로그인 후 이용할 수 있습니다.');
            navigate('/auth/login/local');
        }
    }, [])
    
  return (
    <Container>
        <Wrapper>
            <SideBar />
            {element}
        </Wrapper> 
    </Container>
  )
}

export default AuthLogin