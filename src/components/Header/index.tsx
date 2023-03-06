import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1 onClick={() => navigate('/')}>Wanted pre onboarding fe March</h1>
      <button onClick={() => navigate('/login')}>Login</button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #757575;
  position: relative;
  > h1 {
    cursor: pointer;
  }
  > button {
    font-size: 13px;
    background: #475569;
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    position: absolute;
    top: 20px;
    right: 100px;
    &:hover {
      background: #64748b;
    }
  }
`;

export default Header;
