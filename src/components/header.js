import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';

const Header = ({ savedUsername }) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    navigate(0);
  };
  return (
    <HeaderContainer>
      <TitleWrapper>
        <Title>Wanted Pre-onboarding course</Title>
      </TitleWrapper>
      {savedUsername && (
        <ProfileWrapper>
          <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Profile image" src="/broken-image.jpg">
            {savedUsername == null ? '' : savedUsername[0]}
          </Avatar>
          <UserName>{savedUsername + '님, 안녕하세요.'}</UserName>
          <LogoutButton variant="contained" color="error" onClick={onClickLogout}>
            로그아웃
          </LogoutButton>
        </ProfileWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;

const TitleWrapper = styled.div``;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.span`
  margin: 0px 10px;
`;

const LogoutButton = styled(Button)`
  width: 90px;
`;
