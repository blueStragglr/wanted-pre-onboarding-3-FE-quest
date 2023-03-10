import { useNavigate } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil";
import { ACCESS_TOKEN_KEY } from "../../util/api/const";
import { loginState } from "../../util/state/atom";
import { Line, Title, Wrapper } from "./style"

const Header = () => {
  const navigate = useNavigate();
  const [{isLoggedIn ,name}, setLoggedIn] = useRecoilState(loginState)

  const handleLogin = (type:string) => navigate(`/auth/login/${type}`)
  const handleLogout = () => {
    if(!window.confirm('로그아웃 하시겠습니까?')){
      return
    }
    setLoggedIn({isLoggedIn : false, name:''});
    if(localStorage.getItem(ACCESS_TOKEN_KEY) !== undefined) {
      localStorage.removeItem(ACCESS_TOKEN_KEY)
    }
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
              <span>{name}</span>
              <button onClick={handleLogout}>Logout</button>            
              </>
            : <>
                <button onClick={() => handleLogin('jwt')}>JWT Login</button>
                <button onClick={() => handleLogin('local')}>LOCAL Login</button>            
              </>
            
            }
        </Wrapper>
        <Line/>
    </>
  )
}

export default Header