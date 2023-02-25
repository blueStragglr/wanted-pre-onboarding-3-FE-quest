import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderTitle } from './Header.style';

function Header() {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle onClick={homeHandler}>
          Wanted Pre-onboarding course
        </HeaderTitle>
      </HeaderContainer>
    </>
  );
}

export default Header;
