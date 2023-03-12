import { useNavigate } from "react-router-dom"
import { ILoginState, userKey } from "../../context/LoginContext";
import { ThemeState } from "../../context/ThemeContext";
import { useLoginContext } from "../../hooks/useLoginContext";
import { useThemeContext } from "../../hooks/useThemeContext";
import { Line, Title, Wrapper } from "./style"

const Header = () => {
  const {isDark, setIsDark} : ThemeState = useThemeContext()
  const toggleTheme = () => setIsDark((prev) => !prev)

  const navigate = useNavigate();

  const {state : {isLoggedIn, name}, dispatch} : ILoginState = useLoginContext()

  const handleLogin = (type:string) => navigate(`/auth/login/${type}`)
  const handleLogout = () => {
    if(!window.confirm('로그아웃 하시겠습니까?')){
      return
    }
    dispatch({type:"LOGOUT", name:''});

    if(localStorage.getItem(userKey)) {
      localStorage.removeItem(userKey)
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
            <button onClick={toggleTheme}>
              {isDark ? 'light' : 'dark'}
            </button> 
        </Wrapper>
        <Line/>
    </>
  )
}

export default Header