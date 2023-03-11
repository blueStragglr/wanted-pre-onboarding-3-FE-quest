import Nav from "./components/Nav";
import NavigationHeader from "./components/Nav/NavHeader";

// 현재 활성화된 메뉴를 표시하기 위한 함수
function isActive(path) {
  return window.location.pathname.startsWith(path);
}

// 사이드 바 안에 표시될 콘텐츠 내용
function SideNav() {
  return (
    <>
      <Nav>
        <Nav.List>
          <Nav.Item>
            <Nav.Link to="/" active={isActive("/")}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/pageA" active={isActive("/pageA")}>
              Page A
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/pageB" active={isActive("/pageB")}>
              Page B
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/pageC" active={isActive("/pageC")}>
              Page C
            </Nav.Link>
          </Nav.Item>
          <Nav.Item disabled>
            <Nav.Link>Coming Soon</Nav.Link>
          </Nav.Item>

          <Nav.Separator />

          <Nav.Item>
            <Nav.Link to="/test" active={isActive("/test")}>
              Test
            </Nav.Link>
            <Nav.List expanded={isActive("/test")}>
              <Nav.Item>
                <Nav.Link to="/test/one" active={isActive("/test/one")}>
                  Test in one
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/test/two" active={isActive("/test/two")}>
                  Test in two
                </Nav.Link>
              </Nav.Item>
            </Nav.List>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </>
  );
}

export default SideNav;
