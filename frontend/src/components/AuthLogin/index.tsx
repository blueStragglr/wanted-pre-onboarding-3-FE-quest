import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loginState } from '../../util/state/atom'
import Header from '../Header'
import SideBar from '../SideBar'
import { Container, Wrapper } from './style'

interface IAuthLogin{
    element:React.ReactNode
}

const AuthLogin:React.FC<IAuthLogin> = ({element}) => {
    const navigate = useNavigate();
    const {isLoggedIn} = useRecoilValue(loginState)

    useEffect(() => {
        if(!isLoggedIn){
            alert('로그인 후 이용할 수 있습니다.');
            navigate('/auth/login');
        }
    }, [])
    
  return (
    <Container>
        <Header />
        <Wrapper>
            <SideBar />
            {element}
        </Wrapper> 
    </Container>
  )
}

export default AuthLogin