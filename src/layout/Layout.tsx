import Header from './Header';
import SideNav from './SideNav';
import { sideMenu } from './nav.config.js';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  & .page {
    display: flex;
    height: calc(100vh - 70px);
  }

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #2f5fef;
  }
`

interface LayoutProps {
  children?: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return(
    <LayoutStyle>
      <Header />
      <div className="page">
        <SideNav 
          navList={sideMenu}
        />
        <main>
          {children}
        </main>
      </div>
    </LayoutStyle>
  )
}

export default Layout;