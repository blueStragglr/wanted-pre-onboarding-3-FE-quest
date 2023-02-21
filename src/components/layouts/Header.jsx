import styled from '@emotion/styled';
import {Link} from "react-router-dom";
import LoginBtn from "../common/LoginBtn";
import Button from "../common/Button";

const HeaderStyle = styled.div`
  height: 100px;
  width: 100%;
  background-color: darkgrey;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  justify-content: space-between;
  .link{
    color: white;
  }
`;

/**
 *
 */
const Header = () => {
  return (
    <HeaderStyle>
      <Link className={'link'} to={"/"}> Wanted-pre-onboarding
      </Link>
      <Button title={'LogIn'}/>
    </HeaderStyle>
  );
};

export default Header;
