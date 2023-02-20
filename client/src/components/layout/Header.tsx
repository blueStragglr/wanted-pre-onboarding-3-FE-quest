import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goHomeBtn = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("myId");
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <h1 onClick={goHomeBtn}>Wanted Pre-onboarding course</h1>
      <div>
        {localStorage.myId ? (
          <h1>안녕하세요! {localStorage.myId}님!</h1>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {localStorage.myId ? <h1 onClick={handleLogout}>Logout</h1> : null}
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #192a56;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 3;
  font-weight: 600;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 0.5px;
  color: #fff;
  > div {
    display: flex;
    > a {
      text-decoration: none;
      color: #fff;
    }
    > h1 {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;
