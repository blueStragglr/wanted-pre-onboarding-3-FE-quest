import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const sideListItem = [
  { name: 'A', path: '/A' },
  { name: 'B', path: '/B' },
  { name: 'C', path: '/C' },
];

const MainContent = () => {
  const navigate = useNavigate();
  const [pagePath, setPagePath] = useState('A');

  const onClickSideContent = (data: string) => {
    setPagePath(data);
  };

  useEffect(() => {
    navigate(`/${pagePath}`);
  }, [pagePath]);

  return (
    <>
      <S.AsideArea>
        {sideListItem.map((data, index) => {
          return (
            <li key={index} onClick={() => onClickSideContent(data.name)}>
              Page {data.name}
            </li>
          );
        })}
      </S.AsideArea>
      <S.ContentArea>
        <S.ContentText>This is Page {pagePath}!</S.ContentText>
      </S.ContentArea>
    </>
  );
};

const Main = () => {
  return <S.MainArea>{MainContent()}</S.MainArea>;
};

export default Main;
