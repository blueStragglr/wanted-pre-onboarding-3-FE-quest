import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import {
  SidebarContainer,
  Link,
  SidebarItem,
  AuthHover,
} from './Sidebar.style';
import sidebar from '../../data/sidebar';
import { RootState } from '../../store/index';

function Sidebar() {
  const location = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  const loginalert = () => {
    alert('로그인을 해주세요 버튼만 눌러도 가능합니다.');
  };

  return (
    <>
      {!isAuth ? (
        <SidebarContainer>
          {sidebar.map(link => (
            <Link to={link.auth} key={link.title}>
              <SidebarItem onClick={loginalert}>
                <AuthHover href={link.auth}>{link.title}</AuthHover>
              </SidebarItem>
            </Link>
          ))}
        </SidebarContainer>
      ) : (
        <SidebarContainer>
          {sidebar.map(link => (
            <Link to={link.path} key={link.title}>
              <SidebarItem>
                <a
                  href={link.path}
                  className={
                    location.pathname === link.path ? 'selected' : null
                  }
                >
                  {link.title}
                </a>
              </SidebarItem>
            </Link>
          ))}
        </SidebarContainer>
      )}
    </>
  );
}

export default Sidebar;
