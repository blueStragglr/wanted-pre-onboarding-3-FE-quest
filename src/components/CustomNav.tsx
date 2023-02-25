import { linkStyle, navStyle } from "../style";
import { CustomLink } from "./CustomLink";

const CustomNav = () => (
  <nav style={navStyle}>
    <CustomLink style={linkStyle} to="/page_a">
      Page A
    </CustomLink>
    <CustomLink style={linkStyle} to="/page_b">
      Page B
    </CustomLink>
    <CustomLink style={linkStyle} to="/page_c">
      Page C
    </CustomLink>
  </nav>
);

export default CustomNav;
