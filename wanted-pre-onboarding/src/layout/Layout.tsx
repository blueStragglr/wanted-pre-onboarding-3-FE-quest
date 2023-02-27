
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
`;
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <div style={{ marginLeft: "100px" }}>{children}</div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
