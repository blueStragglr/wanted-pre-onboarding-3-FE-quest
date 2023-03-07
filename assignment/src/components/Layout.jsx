import Aside from "./Aside";
import "./Layout.css";

function Layout({ children, withLogin }) {
  const { isLogged, routeToLoginPage } = useLoginState();

  // 로그인되지 않은 경우에는 로그인 페이지로 리다이렉트
  if (!isLogged && withLogin) {
    routeToLoginPage();
    // 라우팅 괴기 전 잠깐이라도 로그인이 필요한 컨텐츠를 보여주지 않음
    return <>로그인 페이지로 이동합니다..</>;
  }

  return (
    <section id="layout">
      <section id="header">Wanted Pre-onboarding course</section>
      <section id="bottomSide">
        <Aside />
        <section id="main">{children}</section>
      </section>
    </section>
  );
}

export default Layout;
