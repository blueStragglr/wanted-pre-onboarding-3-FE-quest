import styled from '@emotion/styled';
import {Link, useNavigate} from "react-router-dom";
import Button from "../common/Button";
import React, {useCallback, useEffect, useState} from "react";

/**
 *
 */
const Header = () => {

  const emailStorage = localStorage.getItem("email");
  const [haveStorageItem, setHaveStorageItem] = useState(emailStorage);

  const navigate = useNavigate();
  const handleClickLogOut = useCallback((e) => {
    e.preventDefault();
    navigate('/');
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setHaveStorageItem(null);
  },[haveStorageItem]);

  useEffect(()=> {
    navigate('/');
  },[haveStorageItem]);

  return (
    <HeaderStyle>
      <Link className={'link'} to={"/"}> Wanted-pre-onboarding
      </Link>
      {haveStorageItem ?
        <Button title={'LogOut'} onClick={handleClickLogOut} toHome /> :
        <Button title={'LogIn'} />
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
