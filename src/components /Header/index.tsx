import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogoutBtn = () => {
    navigate('/');
    localStorage.removeItem('userName');
    toast.success('로그아웃이 되었습니다.');
  };
  return (
    <S.HeaderArea>
      <S.HeaderText>Wanted Pre-onboarding course</S.HeaderText>
      <S.LogoutBtn onClick={onClickLogoutBtn}>Logout</S.LogoutBtn>
    </S.HeaderArea>
  );
};

export default Header;
