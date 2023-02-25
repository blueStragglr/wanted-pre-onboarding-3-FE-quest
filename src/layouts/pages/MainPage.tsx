import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

import { ContentContainer } from './Pages.style';

function MainPage() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <>
      {!isAuth ? (
        <ContentContainer>
          메인페이지 입니다. <br />
          다른 페이지를 이용하시려면 로그인을 해주세요.
        </ContentContainer>
      ) : (
        <ContentContainer>환영합니다~</ContentContainer>
      )}
    </>
  );
}

export default MainPage;
