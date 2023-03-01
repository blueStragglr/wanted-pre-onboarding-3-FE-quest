import styled, { css } from "styled-components";

// 유저가 클릭할 수 있는 네비게이션 링크를 나타내는 컴포넌트.


// to prop은 이동시킬 페이지의 주소를 나타낸다.
function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

// 클릭해야하므로 a 요소로 만든다.
const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 20px;
  border-radius: 4px;
  color: #758082;
  text-decoration: none;

  ${(p) =>
    p.active &&
    css`
      color: #14424a;
      font-weight: bold;
    `}

    // 마우스가 올라간경우 변경되도록
  &:hover {
    background: #14424a;
    color: #fffffe;
    transform: translateY(-2px);
    transition: 1s;
  }

   // 비활성화의 경우 어둡게 처리
  &:not([href]) {
    color: #c2cacc;
    background: revert;
    transform: none;
  }
`;

// active prop은 주소의 활성화 여부를 결정함.
// 활성화 된 경우엔 디자인 다르도록 설정

function NavLink({ children, to, active = false }) {
  return (
    <Link
      href={to}
      active={active}
      aria-current={isCurrent(to) ? "page" : null} // 웹 접근성 측면에서 권장됨
      // 스크린 리더 사용자는 브라우저 사용자처럼 어떤 링크가 현재 링크에 해당하는지 시각적으로 알기 어려움
    >
      {children}
    </Link>
  );
}

export default NavLink;