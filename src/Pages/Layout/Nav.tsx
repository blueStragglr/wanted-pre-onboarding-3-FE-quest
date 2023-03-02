import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
const Nav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState<any>();

  // 네브바 클릭 시 useNavigate 로 페이지 이동이 적절한가?
  // 어떤 방법으로 이동 시키는 것이 좋을지 고민해봐야한다.
  //useNavigate는 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공합니다.
  //useNavigate는 react v6 에서 useHistory 가 변화한 것입니다
  //이 때 useHistory 에서 사용하던, window의 history 를 이용한 navigate 기능도 할 수 있게 되었습니다.

  return (
    <NavWrap>
      {NAV_ITEMS.map(({ id, name, path }) => {
        return (
          <NavLink to={`${path}`} key={id} className={({ isActive }) => (isActive ? 'navLink is_active' : 'navLink')}>
            {name}
          </NavLink>
        );
      })}
    </NavWrap>
  );
};

const NAV_ITEMS = [
  {
    id: 1,
    name: '홈',
    path: '/',
  },
  {
    id: 2,
    name: '근무/휴가',
    path: '/Attendance',
  },
];

const NavWrap = tw.ul`
  flex ml-[50px];
`;
export default Nav;
