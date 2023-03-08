import { useNavigate } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginState } from "../../util/state/atom";
import { Line, Title, Wrapper } from "./style"

const Header = () => {
  const navigate = useNavigate();
  const [{isLoggedIn ,username}, setLoggedIn] = useRecoilState(loginState)
  const handleLogin = () => navigate('/auth/login')
  const handleLogout = () => {
    if(!window.confirm('로그아웃 하시겠습니까?')){
      return
    }
    setLoggedIn({isLoggedIn : false, username:''});
    navigate('/')
  }
  return (
    <>
        <Wrapper>
            <Title>
                Wanted Pre-onboaring course
            </Title>
            {isLoggedIn 
            ? <>
              <span>{username}</span>
              <button onClick={handleLogout}>Logout</button>            
              </>
            : <button onClick={handleLogin}>Login</button>            
            }
        </Wrapper>
        <Line/>
    </>
  )
}

export default Header