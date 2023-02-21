import styled from '@emotion/styled';
import AsideLeft from "./AsideLeft";
import Header from "./Header";
import {Outlet} from "react-router-dom";

/**
 *
 */
const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <div className={'main'}>
        <AsideLeft />
        <Outlet />
      </div>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  .main{
    display: flex;
  }
`;


export default Layout;
