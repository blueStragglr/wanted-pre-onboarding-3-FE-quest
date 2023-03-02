import { useNavigate } from "react-router-dom"
import { Line, Title, Wrapper } from "./style"

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/auth/login')
  return (
    <>
        <Wrapper>
            <Title>
                Wanted Pre-onboaring course
            </Title>
            <button
            onClick={handleLogin}>Login</button>
        </Wrapper>
        <Line/>
    </>
  )
}

export default Header