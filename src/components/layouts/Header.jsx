import styled from '@emotion/styled';
import {Link} from "react-router-dom";
import Button from "../common/Button";
import React, {useCallback, useState} from "react";
import {LoginBtn} from "../pages/Login";

/**
 *
 */
const Header = () => {

  const emailStorage = localStorage.getItem("email");
  const [haveStorageItem, setHaveStorageItem] = useState(emailStorage);

  const handleDoneLogOut = useCallback((e) => {
    e.preventDefault();
    localStorage.removeItem("email");
  },[haveStorageItem, setHaveStorageItem])

  return (
    <HeaderStyle>
      <Link className={'link'} to={"/"}> Wanted-pre-onboarding
      </Link>
      {haveStorageItem ?
        <Button title={'LogOut'} onClick={handleDoneLogOut} toHome /> :
        <Button title={'LogIn'} url={'login'}/>
      }
    </HeaderStyle>
  );
};


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

export default Header;
