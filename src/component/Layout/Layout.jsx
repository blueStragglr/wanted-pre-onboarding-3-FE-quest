import PropTypes from "prop-types";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const Layout = ({ children }) => <Background>{children}</Background>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
